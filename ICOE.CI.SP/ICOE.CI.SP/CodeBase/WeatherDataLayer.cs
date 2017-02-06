using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.UI;
using System.Net;
using System.Web.Script.Serialization;
using Microsoft.SharePoint;

namespace ICOE.CI.SP
{

    public class WeatherInfo
    {
        public City city { get; set; }

        public string cod { get; set; }
        public string message { get; set; }
        public List<List> list { get; set; }
    }

    public class City
    {
        public string name { get; set; }
        public string country { get; set; }
    }

    public class Temp
    {
        public double day { get; set; }
        public double min { get; set; }
        public double max { get; set; }
        public double night { get; set; }
    }

    public class Weather
    {
        public string description { get; set; }
        public string icon { get; set; }
    }

    public class List
    {
        public Temp temp { get; set; }
        public int humidity { get; set; }
        public List<Weather> weather { get; set; }
    }


    public class WeatherDataLayer
    {
        public WeatherInfo GetWeather(string strCityName)
        {
            string appId = "7ff9386ac961d45792d88abf1099369d";
            string url = string.Format("http://api.openweathermap.org/data/2.5/forecast/daily?q={0}&units=metric&cnt=1&APPID={1}", strCityName, appId);
            WeatherInfo weather = null;
            using (WebClient client = new WebClient())
            {
                string json = client.DownloadString(url);
                weather = (new JavaScriptSerializer()).Deserialize<WeatherInfo>(json);
            }
            return weather;
        }
        public bool StoreSearchResult(WeatherInfo weather, SPWeb web, string listName, out string errorMsg)
        {
            if (weather.cod == "404")
            {
                errorMsg = "Bad Response";
                return false;
            }
            else
            {
                SPListItemCollection items = web.Lists[listName].Items;
                // create item and populate fields
                SPListItem item = items.Add();
                item["City"] = weather.city;
                item["Country"] = weather.city.country;
                item.Update();
                errorMsg = "Successfully Added";
                return true;
            }
        }
    }

}
