﻿<%@ Assembly Name="$SharePoint.Project.AssemblyFullName$" %>
<%@ Assembly Name="Microsoft.Web.CommandUI, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="SharePoint" Namespace="Microsoft.SharePoint.WebControls" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="Utilities" Namespace="Microsoft.SharePoint.Utilities" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Register TagPrefix="asp" Namespace="System.Web.UI" Assembly="System.Web.Extensions, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" %>
<%@ Import Namespace="Microsoft.SharePoint" %>
<%@ Register TagPrefix="WebPartPages" Namespace="Microsoft.SharePoint.WebPartPages" Assembly="Microsoft.SharePoint, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c" %>
<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="WeatherWebPartUserControl.ascx.cs" Inherits="ICOE.CI.SP.WeatherWebPart.WeatherWebPartUserControl" %>
<div>
    <asp:TextBox ID="txtCity" runat="server" Text="" />
    <asp:Button Text="Get Weather Information" runat="server" OnClick="GetWeatherInfo" />
    <hr />
    <table id="tblWeather" runat="server" border="0" cellpadding="0" cellspacing="0"
        visible="false">
        <tr>
            <th colspan="2">Weather Information
            </th>
        </tr>
        <tr>
            <td rowspan="3">
                <asp:Image ID="imgWeatherIcon" runat="server" />
            </td>
        </tr>
        <tr>
            <td>
                <asp:Label ID="lblCity_Country" runat="server" />
                <asp:Image ID="imgCountryFlag" runat="server" />
                <asp:Label ID="lblDescription" runat="server" />
                Humidity:
            <asp:Label ID="lblHumidity" runat="server" />
            </td>
        </tr>
        <tr>
            <td>Temperature:
            (Min:
            <asp:Label ID="lblTempMin" runat="server" />
                Max:
            <asp:Label ID="lblTempMax" runat="server" />
                Day:
            <asp:Label ID="lblTempDay" runat="server" />
                Night:
            <asp:Label ID="lblTempNight" runat="server" />)
            </td>
        </tr>
    </table>
</div>
