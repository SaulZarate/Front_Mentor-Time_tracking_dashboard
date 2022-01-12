let data = []
fetch('https://github.com/SaulZarate/Front_Mentor-Time_tracking_dashboard/blob/main/data.json')
    .then(res => res.json())
    .then(info => {
        data = info
        console.log(data)
    })
    .catch(err => console.log(err))


window.addEventListener('DOMContentLoaded', () => {

    /* Navbar */
    const li_Daily = document.getElementById('nav_item_Daily')
    const li_Weekly = document.getElementById('nav_item_Weekly')
    const li_Monthly = document.getElementById('nav_item_Monthly')

    const title_jobs = document.getElementsByClassName('jobs_title')
    const hora_actual = document.getElementsByClassName('hora-actual')
    const hora_anterior = document.getElementsByClassName('hora-anterior')

    li_Daily.addEventListener('click', clickDay)
    li_Weekly.addEventListener('click', clickWeek)
    li_Monthly.addEventListener('click', clickMonth)

    /* Work */

    function clickDay() {
        console.log('click Day')
        const info_days = data.reduce((a, b) => ([
            ...a, {
                title: b.title,
                time: {
                    current: `${b.timeframes.daily.current}hrs`,
                    previous: `Last Day - ${b.timeframes.daily.previous}hrs`,
                }
            }
        ]), [])
        updateDOM(info_days)
    }
    function clickWeek() {
        console.log('click Week')
        const info_week = data.reduce((a, b) => ([
            ...a, {
                title: b.title,
                time: {
                    current: `${b.timeframes.weekly.current}hrs`,
                    previous: `Last Week - ${b.timeframes.weekly.previous}hrs`,
                }
            }
        ]), [])
        updateDOM(info_week)
    }
    function clickMonth() {
        console.log('click Month')
        const info_month = data.reduce((a, b) => ([
            ...a, {
                title: b.title,
                time: {
                    current: `${b.timeframes.monthly.current}hrs`,
                    previous: `Last Month - ${b.timeframes.monthly.previous}hrs`,
                }
            }
        ]), [])
        updateDOM(info_month)
    }

    function updateDOM(newInfo) {
        console.log(newInfo)

        newInfo.forEach((el, index) => {

            title_jobs[index].textContent = el.title
            hora_actual[index].textContent = el.time.current
            hora_anterior[index].textContent = el.time.previous


        });
    }
})
