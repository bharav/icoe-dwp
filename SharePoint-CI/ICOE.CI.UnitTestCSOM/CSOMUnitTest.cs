using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Telerik.JustMock;
using Microsoft.SharePoint.Client;
using ICOE.CI.SPCSOM;


namespace ICOE.CI.UnitTestCSOM
{
    [TestClass]
    public class CSOMUnitTest
    {
        [TestMethod]
        public void TestWebTitleUsingCSOM()
        {
            var mockContext = Mock.Create<ClientContext>(Constructor.Mocked);
            var mockWeb = Mock.Create<Web>();
            Mock.Arrange(() => mockContext.Web).IgnoreInstance().Returns(mockWeb);
            Mock.Arrange(() => mockWeb.Title).IgnoreInstance().Returns("test");
            Mock.Arrange(() => mockContext.Load(mockWeb)).IgnoreInstance().DoNothing();
            Mock.Arrange(() => mockContext.ExecuteQuery()).IgnoreInstance().DoNothing();
            // Act
            SharePointHelper helper = new SharePointHelper();
            string template = helper.GetTemplateInRootWeb();
            Assert.AreEqual(template, "test");
        }
    }
}
