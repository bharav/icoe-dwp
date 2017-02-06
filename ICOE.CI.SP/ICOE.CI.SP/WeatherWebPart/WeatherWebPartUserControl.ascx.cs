using System;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Net;
using System.Web.Script.Serialization;
using System.Collections;
using System.Collections.Generic;
using ICOE.CI.SP.CodeBase;
using Microsoft.SharePoint;

namespace ICOE.CI.SP.WeatherWebPart
{
    public partial class WeatherWebPartUserControl : UserControl
    {
        protected void Page_Load(object sender, EventArgs e)
        {
        }

        protected void GetWeatherInfo(object sender, EventArgs e)
        {

            WeatherDataLayer weatherdatalayer = new WeatherDataLayer();
            WeatherInfo weatherInfo = weatherdatalayer.GetWeather(txtCity.Text.Trim());
            if (weatherInfo.cod != "404")
            {
                lblCity_Country.Text = weatherInfo.city.name + "," + weatherInfo.city.country;
                imgCountryFlag.ImageUrl = string.Format("http://openweathermap.org/images/flags/{0}.png", weatherInfo.city.country.ToLower());
                lblDescription.Text = weatherInfo.list[0].weather[0].description;
                imgWeatherIcon.ImageUrl = string.Format("http://openweathermap.org/img/w/{0}.png", weatherInfo.list[0].weather[0].icon);
                lblTempMin.Text = string.Format("{0}°С", Math.Round(weatherInfo.list[0].temp.min, 1));
                lblTempMax.Text = string.Format("{0}°С", Math.Round(weatherInfo.list[0].temp.max, 1));
                lblTempDay.Text = string.Format("{0}°С", Math.Round(weatherInfo.list[0].temp.day, 1));
                lblTempNight.Text = string.Format("{0}°С", Math.Round(weatherInfo.list[0].temp.night, 1));
                lblHumidity.Text = weatherInfo.list[0].humidity.ToString();
                tblWeather.Visible = true;
            }
            else
            {
                tblWeather.Visible = false;
            }
        }

    }


}
