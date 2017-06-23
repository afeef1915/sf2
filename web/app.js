var charts = {};

            Chart.defaults.global.defaultFontColor = "#fff";
            var color = Chart.helpers.color;
            function createConfig(legendPosition, colorName, labelvalues, heading, data, minval, maxval, labelstring) {
                return {
                    type: 'line',
                    data: {
                        labels: labelvalues,
                        datasets: data
                    },
                    options: {
                        responsive: true,
                        title: {
                            display: true,
                            text: heading
                        },
                        legend: {
                            position: legendPosition,
                            labels: {
                                usePointStyle: true
                            }
                        },
                        scales: {
                            xAxes: [{
                                    display: true,
                                    scaleLabel: {
                                        display: true
                                    }
                                }],
                            yAxes: [{
                                    display: true,
                                    scaleLabel: {
                                        display: true,
                                        labelString: labelstring
                                    },
                                    ticks: {
                                        suggestedMin: minval,
                                        suggestedMax: maxval
                                    }
                                }]
                        }
                    }
                };
            }



            function updatechart() {
                [{
                        id: 'buychart',
                        legendPosition: 'bottom',
                        color: '#900',
                        labelvalues: ['-24hr', '-23h50m', '-23h40m', '-23h30m', '-23h20m', '-23h10m', '-23hr', '-22h50m', '-22h40m', '-22h30m', '-22h20m', '-22h10m', '-22hr', '-21h50m', '-21h40m', '-21h30m', '-21h20m', '-21h10m', '-21hr', '-20h50m', '-20h40m', '-20h30m', '-20h20m', '-20h10m', '-20hr', '-19h50m', '-19h40m', '-19h30m', '-19h20m', '-19h10m', '-19hr', '-18h50m', '-18h40m', '-18h30m', '-18h20m', '-18h10m', '-18hr', '-17h50m', '-17h40m', '-17h30m', '-17h20m', '-17h10m', '-17hr', '-16h50m', '-16h40m', '-16h30m', '-16h20m', '-16h10m', '-16hr', '-15h50m', '-15h40m', '-15h30m', '-15h20m', '-15h10m', '-15hr', '-14h50m', '-14h40m', '-14h30m', '-14h20m', '-14h10m', '-14hr', '-13h50m', '-13h40m', '-13h30m', '-13h20m', '-13h10m', '-13hr', '-12h50m', '-12h40m', '-12h30m', '-12h20m', '-12h10m', '-12hr', '-11h50m', '-11h40m', '-11h30m', '-11h20m', '-11h10m', '-11hr', '-10h50m', '-10h40m', '-10h30m', '-10h20m', '-10h10m', '-10hr', '-9h50m', '-9h40m', '-9h30m', '-9h20m', '-9h10m', '-9hr', '-8h50m', '-8h40m', '-8h30m', '-8h20m', '-8h10m', '-8hr', '-7h50m', '-7h40m', '-7h30m', '-7h20m', '-7h10m', '-7hr', '-6h50m', '-6h40m', '-6h30m', '-6h20m', '-6h10m', '-6hr', '-5h50m', '-5h40m', '-5h30m', '-5h20m', '-5h10m', '-5hr', '-4h50m', '-4h40m', '-4h30m', '-4h20m', '-4h10m', '-4hr', '-3h50m', '-3h40m', '-3h30m', '-3h20m', '-3h10m', '-3hr', '-2h50m', '-2h40m', '-2h30m', '-2h20m', '-2h10m', '-2hr', '-1h50m', '-1h40m', '-1h30m', '-1h20m', '-1h10m', '-1hr', '-50m', '-40m', '-30m', '-20m', '-10m', '0m'],
                        data: [],
                        heading: 'BITCOIN BUY RATES',
                        min: 0,
                        max: 0,
                        labelstring: 'Rate [Rs]'
                    }, {
                        id: 'sellchart',
                        legendPosition: 'bottom',
                        color: '#009',
                        labelvalues: ['-12hr', '-11h55m', '-11h50m', '-11h45m', '-11h40m', '-11h35m', '-11h30m', '-11h25m', '-11h20m', '-11h15m', '-11h10m', '-11h5m', '-11hr', '-10h55m', '-10h50m', '-10h45m', '-10h40m', '-10h35m', '-10h30m', '-10h25m', '-10h20m', '-10h15m', '-10h10m', '-10h5m', '-10hr', '-9h55m', '-9h50m', '-9h45m', '-9h40m', '-9h35m', '-9h30m', '-9h25m', '-9h20m', '-9h15m', '-9h10m', '-9h5m', '-9hr', '-8h55m', '-8h50m', '-8h45m', '-8h40m', '-8h35m', '-8h30m', '-8h25m', '-8h20m', '-8h15m', '-8h10m', '-8h5m', '-8hr', '-7h55m', '-7h50m', '-7h45m', '-7h40m', '-7h35m', '-7h30m', '-7h25m', '-7h20m', '-7h15m', '-7h10m', '-7h5m', '-7hr', '-6h55m', '-6h50m', '-6h45m', '-6h40m', '-6h35m', '-6h30m', '-6h25m', '-6h20m', '-6h15m', '-6h10m', '-6h5m', '-6hr', '-5h55m', '-5h50m', '-5h45m', '-5h40m', '-5h35m', '-5h30m', '-5h25m', '-5h20m', '-5h15m', '-5h10m', '-5h5m', '-5hr', '-4h55m', '-4h50m', '-4h45m', '-4h40m', '-4h35m', '-4h30m', '-4h25m', '-4h20m', '-4h15m', '-4h10m', '-4h5m', '-4hr', '-3h55m', '-3h50m', '-3h45m', '-3h40m', '-3h35m', '-3h30m', '-3h25m', '-3h20m', '-3h15m', '-3h10m', '-3h5m', '-3hr', '-2h55m', '-2h50m', '-2h45m', '-2h40m', '-2h35m', '-2h30m', '-2h25m', '-2h20m', '-2h15m', '-2h10m', '-2h5m', '-2hr', '-1h55m', '-1h50m', '-1h45m', '-1h40m', '-1h35m', '-1h30m', '-1h25m', '-1h20m', '-1h15m', '-1h10m', '-1h5m', '-1hr', '-55m', '-50m', '-45m', '-40m', '-35m', '-30m', '-25m', '-20m', '-15m', '-10m', '-5m', '0m'],
                        data: [],
                        heading: 'BITCOIN SELL RATES',
                        min: 0,
                        max: 0,
                        labelstring: 'Rate [Rs]'
                    }, {
                        id: 'arbitragefeeschart',
                        legendPosition: 'bottom',
                        color: '#090',
                        labelvalues: ['-1hr', '-55m', '-50m', '-45m', '-40m', '-35m', '-30m', '-25m', '-20m', '-15m', '-10m', '-5m', '0m'],
                        data: [],
                        heading: 'MAX ARBITRAGE PROFITS [DEFAULT FEES, ALL EXCHANGES]',
                        min: 0,
                        max: 0,
                        labelstring: 'Profit [%]'
                    }, {
                        id: 'arbitragechart',
                        legendPosition: 'bottom',
                        color: '#990',
                        labelvalues: ['-1hr', '-55m', '-50m', '-45m', '-40m', '-35m', '-30m', '-25m', '-20m', '-15m', '-10m', '-5m', '0m'],
                        data: [],
                        heading: 'MAX ARBITRAGE PROFITS [WITHOUT FEES, ALL EXCHANGES]',
                        min: 0,
                        max: 0,
                        labelstring: 'Profit [%]'
                    }].forEach(function (details) {
                    var ctx = document.getElementById(details.id).getContext('2d');
                    var config = createConfig(details.legendPosition, details.color, details.labelvalues, details.heading, details.data, details.min, details.max, details.labelstring);
                    var cid = details.id;
                    charts[cid] = new Chart(ctx, config);
                })
            }
            ;
            updatechart();

            function updatedata()
            {
                var minbuyid;
                var maxsellid;
                var minbuyidfees;
                var maxsellidfees;
                var minbuy;
                var minbuyfees;
                var maxsell;
                var maxsellfees;
                $.getJSON("getdata.php", function (result) {

                    $.each(result.rates, function (id, val) {
                        if (minbuy == null || minbuy > val.buyrate) {
                            minbuy = val.buyrate;
                            minbuyid = id;
                        }

                        if (minbuyfees == null || minbuyfees > val.buyratefees) {
                            minbuyfees = val.buyratefees;
                            minbuyidfees = id;
                        }

                        if (maxsell == null || maxsell < val.sellrate) {
                            maxsell = val.sellrate;
                            maxsellid = id;
                        }

                        if (maxsellfees == null || maxsellfees < val.sellratefees) {
                            maxsellfees = val.sellratefees;
                            maxsellidfees = id;
                        }

                        $('#' + id + '_buyrate').text(val.buyrate);
                        $('#' + id + '_buyvolume').text("(" + val.buyvolume + ")");
                        $('#' + id + '_sellrate').text(val.sellrate);
                        $('#' + id + '_sellvolume').text("(" + val.sellvolume + ")");
                        $('#' + id + '_buyratefees').text(val.buyratefees);
                        $('#' + id + '_buyvolumefees').text("(" + val.buyvolume + ")");
                        $('#' + id + '_sellratefees').text(val.sellratefees);
                        $('#' + id + '_sellvolumefees').text("(" + val.sellvolume + ")");
                        $('#' + id + '_time').text("(" + val.time + ")");
                    });

                    $('#arbitragelist').html('');
                    $.each(result.arbopp, function (id, val) {
                        var m = '<a href="#" class="list-group-item"><p class="list-group-item-text">';
                        m = m + "Profit " + val.profit + "% : Buy at " + val.buyat + " for Rs." + val.buyrate + " and sell at " + val.sellat + " for Rs." + val.sellrate;
                        m = m + '</p></a>';
                        $('#arbitragelist').html($('#arbitragelist').html() + m);
                    });

                    $('#arbitragefeeslist').html('');
                    $.each(result.arboppfees, function (id, val) {
                        var m = '<a href="#" class="list-group-item"><p class="list-group-item-text">';
                        m = m + "Profit " + val.profit + "% : Buy at " + val.buyat + " for Rs." + val.buyrate + " and sell at " + val.sellat + " for Rs." + val.sellrate;
                        m = m + '</p></a>';
                        $('#arbitragefeeslist').html($('#arbitragefeeslist').html() + m);
                    });


                    updateaverage();
                    $('td').removeClass('success');
                    $('#' + minbuyid + '_buyraterow').addClass('success');
                    $('#' + maxsellid + '_sellraterow').addClass('success');
                    $('#' + minbuyidfees + '_buyratefeesrow').addClass('success');
                    $('#' + maxsellidfees + '_sellratefeesrow').addClass('success');
                    charts['buychart'].options.scales.yAxes[0].ticks.suggestedMax = result.graph.maxbuygraph;
                    charts['buychart'].options.scales.yAxes[0].ticks.suggestedMin = result.graph.minbuygraph;
                    charts['buychart'].data.datasets = result.graph.buygraphdata;
                    charts['buychart'].update();

                    charts['sellchart'].options.scales.yAxes[0].ticks.suggestedMax = result.graph.maxsellgraph;
                    charts['sellchart'].options.scales.yAxes[0].ticks.suggestedMin = result.graph.minsellgraph;
                    charts['sellchart'].data.datasets = result.graph.sellgraphdata;
                    charts['sellchart'].update();

                    charts['arbitragefeeschart'].options.scales.yAxes[0].ticks.suggestedMax = result.graph.maxarbitragefeesgraph;
                    charts['arbitragefeeschart'].options.scales.yAxes[0].ticks.suggestedMin = result.graph.minarbitragefeesgraph;
                    charts['arbitragefeeschart'].data.datasets = result.graph.arbitragefeesgraphdata;
                    charts['arbitragefeeschart'].update();

                    charts['arbitragechart'].options.scales.yAxes[0].ticks.suggestedMax = result.graph.maxarbitragegraph;
                    charts['arbitragechart'].options.scales.yAxes[0].ticks.suggestedMin = result.graph.minarbitragegraph;
                    charts['arbitragechart'].data.datasets = result.graph.arbitragegraphdata;
                    charts['arbitragechart'].update();

                });
                setTimeout(updatedata, 60000);
            }
            updatedata();


            $(".charts").mouseover(function (e) {
                var cid = $(this).attr('id');

                for (var i = 0; i < charts[cid].data.datasets.length; i++)
                {
                    charts[cid].data.datasets[i].pointRadius = charts[cid].data.datasets[i].pointmouseoverradius;
                }
                charts[cid].update();
            });

            $(".charts").mouseout(function (e) {
                var cid = $(this).attr('id');
                for (var i = 0; i < charts[cid].data.datasets.length; i++)
                {
                    charts[cid].data.datasets[i].pointRadius = charts[cid].data.datasets[i].pointmouseoutradius;
                }
                charts[cid].update();
            });



            function updateaverage()
            {
                var btcamt = parseFloat($('#averageinput').val());
                var buyratesum = 0;
                var sellratesum = 0;
                var buyratefeessum = 0;
                var sellratefeessum = 0;
                var k;
                k = 0;
                $(".buyrate").each(function () {
                    buyratesum = buyratesum + parseFloat($(this).text());
                    k++;
                });
                $('#buyrateavg').text(k == 0 ? 0 : (btcamt * buyratesum / k).toFixed(2));
                k = 0;
                $(".buyratefees").each(function () {
                    buyratefeessum = buyratefeessum + parseFloat($(this).text());
                    k++;
                });
                $('#buyratefeesavg').text(k == 0 ? 0 : (btcamt * buyratefeessum / k).toFixed(2));
                k = 0;
                $(".sellrate").each(function () {
                    sellratesum = sellratesum + parseFloat($(this).text());
                    k++;
                });
                $('#sellrateavg').text(k == 0 ? 0 : (btcamt * sellratesum / k).toFixed(2));
                k = 0;
                $(".sellratefees").each(function () {
                    sellratefeessum = sellratefeessum + parseFloat($(this).text());
                    k++;
                });
                $('#sellratefeesavg').text(k == 0 ? 0 : (btcamt * sellratefeessum / k).toFixed(2));
            }

            $("#averageinput").on("propertychange change keyup paste input", function () {
                updateaverage();
            });
            $(".efees").on("paste input", function () {
                var newfees = $(this).val();
                if (isNumeric(newfees))
                {
                    var id = $(this).attr("name");
                    $('#' + id + '_updatefees').removeClass('hide');
                }

            });
            function isNumeric(n) {
                return !isNaN(parseFloat(n)) && isFinite(n);
            }

            $('.arbitragelist').on('click', '.list-group-item', function (event) {
                event.preventDefault();
            });


