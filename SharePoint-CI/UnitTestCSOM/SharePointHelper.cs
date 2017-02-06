using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.SharePoint.Client;


namespace ICOE.CI.SPCSOM
{
    public class SharePointHelper
    {
        public string GetTemplateInRootWeb()
        {
            string strtemplate = string.Empty;
            try
            {

                ClientContext clientContext = new ClientContext("http://localhost");
                Web web = clientContext.Web;
                clientContext.Load(web);
                clientContext.ExecuteQuery();
                strtemplate = web.Title;


            }
            catch (Exception exception)
            {
                throw new Exception("Get TemplateInRootWeb niet gelukt", exception);
            }
           
                return strtemplate;
        }

        private static string QueryTemplates(string documentName)
        {
            return string.Format(@"<View>
                            <Query>
                                <Where>
                                    <Eq>
                                    <FieldRef Name='Title'></FieldRef>
                                    <Value Type='Text'>{0}</Value>
                                    </Eq>
                                </Where>
                            </Query>                                          
                            <ViewFields>
                                <FieldRef Name=""EmailTemplate"" />
                            </ViewFields>
                                <RowLimit>1</RowLimit>     
                            </View>", documentName);
        }
    }
}
