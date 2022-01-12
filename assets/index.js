let data = []

// Para pruebas en local
data = [
    {
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]

/* Usando Fetch */
// No funciona usando el recurso con github por politicas seguridad
/* fetch('../data.json')
    .then(res => res.json())
    .then(info => {
        data = info
    })
    .catch(err => console.log("No se encontraron los datos", err)) */


window.addEventListener('DOMContentLoaded', () => {

    /* Navbar */
    const content_nav_items = document.getElementById('content_nav_items')
    content_nav_items.addEventListener('click', handleNavbar)

    /* Tag to update */
    const title_jobs = document.getElementsByClassName('jobs_title')
    const hora_actual = document.getElementsByClassName('hora-actual')
    const hora_anterior = document.getElementsByClassName('hora-anterior')


    function handleNavbar(e) {
        switch (e.target.textContent) {
            case "Daily":
                filterData("Daily")
                break;

            case "Weekly":
                filterData("Weekly")
                break;

            case "Monthly":
                filterData("Monthly")
                break;

            default:
                // ....
                break;
        }
    }

    function filterData(dateType) {
        const info_date = data.reduce((a, b) => ([
            ...a, {
                title: b.title,
                time: {
                    current: `${b.timeframes[dateType.toLowerCase()].current}hrs`,
                    previous: `Last ${dateType} - ${b.timeframes[dateType.toLowerCase()].previous}hrs`,
                }
            }
        ]), [])
        updateDOM(info_date)
    }

    function updateDOM(newInfo) {
        newInfo.forEach((el, index) => {
            title_jobs[index].textContent = el.title
            hora_actual[index].textContent = el.time.current
            hora_anterior[index].textContent = el.time.previous
        })
    }
})
