using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Web;
using System.Web.UI;
using ICOE.CI.SP;
using Microsoft.SharePoint.Emulators;
using Microsoft.QualityTools.Testing.Emulators;
using Microsoft.SharePoint;



namespace ICOE.CI.SP.UnitTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void CheckWeatherSearchAdded()
        {
            // create the emulation scope with a using statement
            using (new SharePointEmulationScope())
            using (var site = new SPSite("http://localhost"))
            {
                // Arrange

                WeatherDataLayer weatherDL = new WeatherDataLayer();
                string errorMsg = string.Empty;
                DateTime date = DateTime.Now;
                SPList list = AddListToSiteHelper(site);
                WeatherInfo weather = weatherDL.GetWeather("Mumbai");
                // Act
                bool success = weatherDL.StoreSearchResult(weather, site.RootWeb, list.Title,
                    out errorMsg);
                list.Delete();

                // Assert
                Assert.IsTrue(success);
            }
        }

        public SPList AddListToSiteHelper(SPSite site)
        {
            // create a new temporary list               

            SPWeb web = site.RootWeb;
            var listId = web.Lists.Add("test", "test", SPListTemplateType.GenericList);
            SPList list = site.RootWeb.Lists[listId];
            list.Fields.Add("City", SPFieldType.Text, false);
            list.Fields.Add("Country", SPFieldType.Text, false);
            list.Update();
            Assert.IsNotNull(list);

            return list;
        }

    }

   
}
