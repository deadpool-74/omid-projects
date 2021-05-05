// Document Ready
$(document).ready(function () {
    // Chart JS
    // registerUserChart
    let registerUser = document.getElementById('register-user');
    let registerUserChart = new Chart(registerUser , {
        type : 'line',
        data : {
            labels : ['','','','','',''],
            datasets : [{
                data : [5540,4300,7400,3215,8965,3500],
                backgroundColor : 'transparent',
                borderColor : '#fff' ,
                borderWidth : 2 ,
                pointBackgroundColor : '#fff'
            }]
        },
        options : {
            layout : {
                padding : {
                    left : 5,
                    right : 5
                }
            },
            scales : {
                xAxes : [{
                    display : false
                }],
                yAxes : [{
                    display : false
                }]
            },
            legend : {
                display : false
            }
        }
    });
    // commentChart
    let comment = document.getElementById('comment');
    let commentChart = new Chart(comment , {
        type : 'bar',
        data : {
            labels : ['','','','','',''],
            datasets : [{
                data : [3240,5400,6322,2290,8965,3500],
                backgroundColor : '#fff',
                borderColor : '#fff' ,
                borderWidth : 2 ,
                pointBackgroundColor : '#fff'
            }]
        },
        options : {
            layout : {
                padding : {
                    left : 5,
                    right : 5
                }
            },
            scales : {
                xAxes : [{
                    display : false
                }],
                yAxes : [{
                    display : false
                }]
            },
            legend : {
                display : false
            }
        }
    });
    // shopUserChart
    let shopUser = document.getElementById('shop-user');
    let shopUserChart = new Chart(shopUser , {
        type : 'line',
        data : {
            labels : ['','','','','',''],
            datasets : [{
                data : [4690,3500,3689,4990,6398,4570],
                backgroundColor : 'transparent',
                borderColor : '#fff' ,
                borderWidth : 2 ,
                pointBackgroundColor : '#fff'
            }]
        },
        options : {
            layout : {
                padding : {
                    left : 5,
                    right : 5
                }
            },
            scales : {
                xAxes : [{
                    display : false
                }],
                yAxes : [{
                    display : false
                }]
            },
            legend : {
                display : false
            }
        }
    });
    // approveCommentChart
    let approveComment = document.getElementById('approve-comment');
    let approveCommentChart = new Chart(approveComment , {
        type : 'bar',
        data : {
            labels : ['','','','','',''],
            datasets : [{
                data : [7867,5498,4567,6547,7658,5632],
                backgroundColor : '#fff',
                borderColor : '#fff' ,
                borderWidth : 2 ,
                pointBackgroundColor : '#fff'
            }]
        },
        options : {
            layout : {
                padding : {
                    left : 5,
                    right : 5
                }
            },
            scales : {
                xAxes : [{
                    display : false
                }],
                yAxes : [{
                    display : false
                }]
            },
            legend : {
                display : false
            }
        }
    });
    // visitorChart
    let visitor = document.getElementById('visitor');
    let visitorChart = new Chart(visitor , {
        type : 'line',
        data : {
            labels : ['شنبه','یکشنبه','دوشنبه','سه شنبه','چهارشنبه','پنجشنبه','جمعه'],
            datasets : [{
                data : [4540,4300,7400,4215,8965,3670,4568],
                backgroundColor : 'rgba(0,0,0,0.2)',
                borderColor : '#555' ,
                borderWidth : 3 ,
                pointBackgroundColor : '#333'
            }]
        },
        options : {
            legend : {
                display : false
            }
        }
    });
    //--------------------------------
    let sidebar = $('#sidebar');

    // Show & Hide Sidebar
    resizeTemplate();
    $(window).resize(resizeTemplate);

    function resizeTemplate() {
        if($(window).width() <= 768) {
            sidebar.collapse('hide')
        } else {
            sidebar.collapse('show')
        }
    }

    // Change Content Width
    sidebar.on('hide.bs.collapse',function (e) {
        if(e.target === this) {
            $('#main').removeClass('col-md-10')
        }
    });
    sidebar.on('show.bs.collapse',function (e) {
        $('#main').addClass('col-md-10')
    });
});