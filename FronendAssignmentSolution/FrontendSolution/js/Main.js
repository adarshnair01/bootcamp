var chart1; // globally available
$(document).ready(function() {
      chart1 = new MAQ.charts(


        {
        "chart": {
        "renderTo": "maqChart",
        "isResponsive": true,
        "type": "bar",
        "margin": [
        10
        ],
        "style": {
        "width": "730px",
        "height": "400px",
        "border": "0px solid silver"
        }
        },
        "title": {
        "align": "center",
        "text": "Basic Bar",
        "x": 0,
        "y": 0,
        "floating": false,
        "style": {
        "fill": "#0066CC",
        "fontSize": "24px",
        "fontFamily": "Segoe UI"
        }
        },
        "plotOptions": {
        "bar": {
        "padding": 10,
        "groupPadding": 5,
        "stacked": false,
        "multiColored": true,
        "color": [
        "#DDDF0D",
        "#7798BF",
        "#55BF3B",
        "#DF5353",
        "#aaeeee",
        "#ff0066",
        "#eeaaee",
        "#55BF3B",
        "#DF5353",
        "#7798BF",
        "#aaeeee"
        ],
        "opacity": 0.8,
        "borderColor": "white",
        "borderRadius": 0,
        "borderWidth": 1,
        "borderDashStyle": "",
        "valueBox": {
        "enabled": true,
        "position": "middle",
        "formatter": null,
        "style": {
        "fill": "#444",
        "fontSize": "14px",
        "fontFamily": "Segoe UI"
        }
        }
        }
        },
        "legend": {
        "enabled": false,
        "enableClick": false,
        "align": "center",
        "verticalAlign": "bottom",
        "verticalAlignLegend": false,
        "borderColor": "silver",
        "borderStyle": "",
        "borderWidth": 1,
        "borderRadius": 2,
        "layout": "horizontal",
        "floating": false,
        "symbolWidth": 12,
        "symbolPadding": 3,
        "individualDistance": 10,
        "lineHeight": 5,
        "style": {
        "fill": "#444",
        "fontSize": "12px",
        "fontFamily": "Segoe UI"
        },
        "enableTextClipping": false,
        "clipTextFrom": "left",
        "clippedTextLength": 10
        },
        "xAxis": {
        "title": {
        "align": "center",
        "text": "Revenue ($)",
        "style": {
        "fill": "#444",
        "fontSize": "16px",
        "fontWeight": "bold",
        "fontFamily": "Segoe UI"
        },
        "x": 0,
        "y": 0
        },
        "labels": {
        "enabled": true,
        "align": "center",
        "series": [],
        "formatter": "InsertCommas",
        "staggerLines": false,
        "rotation": 0,
        "style": {
        "fill": "#0066CC",
        "fontSize": "13px",
        "fontFamily": "Segoe UI"
        },
        "x": 0,
        "y": 0
        },
        "numberOfGridLines": 8,
        "gridLineWidth": 0,
        "gridLineColor": "silver",
        "gridLineDashStyle": "shortdash",
        "lineColor": "silver",
        "lineWidth": 1,
        "tickWidth": 2,
        "tickHeight": 5,
        "tickColor": "silver",
        "tickPosition": "outside",
        "labelSpacing": 5,
        "shiftStartBy": 10,
        "skipInterval": 0,
        "alternateGridColor": "",
        "usageWidth": 98
        },
        "yAxis": {
        "title": {
        "align": "center",
        "text": "Months",
        "style": {
        "fill": "#444",
        "fontSize": "16px",
        "fontWeight": "bold",
        "fontFamily": "Segoe UI"
        },
        "x": 0,
        "y": 0
        },
        "labels": {
        "enabled": true,
        "align": "right",
        "series": [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
        ],
        "formatter": "",
        "staggerLines": false,
        "rotation": 0,
        "style": {
        "fill": "#0066CC",
        "fontSize": "11px",
        "fontFamily": "Segoe UI"
        },
        "x": 0,
        "y": 0
        },
        "numberOfGridLines": 4,
        "gridLineWidth": 1,
        "gridLineColor": "silver",
        "gridLineDashStyle": "shortdash",
        "lineWidth": 1,
        "lineColor": "silver",
        "tickWidth": 5,
        "tickHeight": 5,
        "tickPosition": "onaxis",
        "tickColor": "silver",
        "labelSpacing": 5,
        "shiftStartBy": 0,
        "skipInterval": 0,
        "alternateGridColor": ""
        },
        "tooltip": {
        "enabled": true,
        "customTooltip": null,
        "style": {
        "padding": "2px 5px",
        "border": "2px solid silver",
        "backgroundColor": "#fff",
        "color": "#444",
        "font": "14px \"Segoe UI\""
        }
        },
        "animation": {
        "enabled": true,
        "type": 1
        },
        "series": [
        {
        "name": "Tokyo",
        "data": [
        29.9,
        71.5,
        106.4,
        120,
        144,
        176,
        135.6,
        150,
        216.4,
        194.1,
        95.6,
        54.4
        ]
        }
        ]
        }


     );
   });
