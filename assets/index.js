let data = []

/* // Para pruebas en local
fetch('../data.json') */
/* Deployment in Github */
fetch('https://github.com/SaulZarate/Front_Mentor-Time_tracking_dashboard/blob/main/data.json')
    .then(res => res.json())
    .then(info => {
        data = info
    })
    .catch(err => console.log("No se encontraron los datos", err))


window.addEventListener('DOMContentLoaded', () => {

    /* Navbar */
    const content_nav_items = document.getElementById('content_nav_items')
    content_nav_items.addEventListener('click', handleNavbar)

    /* Tag to update */
    const title_jobs = document.getElementsByClassName('jobs_title')
    const hora_actual = document.getElementsByClassName('hora-actual')
    const hora_anterior = document.getElementsByClassName('hora-anterior')


    function handleNavbar(e){
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

    function filterData(dateType){
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
