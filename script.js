// const togBtn = document.getElementById('togglebtn')
// function toggle(){
//     togBtn.addEventListener('click',()=>{
//         document.body.classList.toggle("darktheme")
//         if(document.body.classList.contains("darktheme")){
//             togBtn.classList.remove("fa-moon")
//             togBtn.classList.add("fa-sun")
//         }
//         else{
//             togBtn.classList.add("fa-moon")
//             togBtn.classList.remove("fa-sun")
//         }
//     })
// }
// toggle()



let options = {
    series: [
    {
      name: 'Actual',
      data: [
        {
          x: '2016',
          y: 1292,
          goals: [
            {
              name: 'Expected',
              value: 1400,
              strokeHeight: 5,
              strokeColor: '#775DD0',
              transaction:1300,
              revenue:8900,
              likes:302,
              users:900,
            

            }
          ]
        },
        {
          x: '2017',
          y: 4432,
          goals: [
            {
              name: 'Expected',
              value: 5400,
              strokeHeight: 5,
              strokeColor: '#775DD0',
              transaction:1300,
              revenue:4500,
              likes:190,
              users:700,
              

            }
          ]
        },
        {
          x: '2018',
          y: 5423,
          goals: [
            {
              name: 'Expected',
              value: 5200,
              strokeHeight: 5,
              strokeColor: '#775DD0',
              transaction:1300,
              revenue:600,
              likes:700,
              users:320,
              

            }
          ]
        },
        {
          x: '2019',
          y: 6653,
          goals: [
            {
              name: 'Expected',
              value: 6500,
              strokeHeight: 5,
              strokeColor: '#775DD0',
              transaction:1300,
              revenue:200,
              likes:680,
              users:120,
              

            }
          ]
        },
        {
          x: '2020',
          y: 8133,
          goals: [
            {
              name: 'Expected',
              value: 6600,
              strokeHeight: 13,
              strokeWidth: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0',
              transaction:1300,
              revenue:400,
              likes:700,
              users:540,
              

            }
          ]
        },
        {
          x: '2021',
          y: 7132,
          goals: [
            {
              name: 'Expected',
              value: 7500,
              strokeHeight: 5,
              strokeColor: '#775DD0',
              transaction:1300,
              revenue:450,
              likes:360,
              users:450,
              

            }
          ]
        },
        {
          x: '2022',
          y: 7332,
          goals: [
            {
              name: 'Expected',
              value: 8700,
              strokeHeight: 5,
              strokeColor: '#775DD0',
              transaction:1300,
              revenue:790,
              likes:460,
              users:156,
              

            }
          ]
        },
        {
          x: '2023',
          y: 6553,
          goals: [
            {
              name: 'Expected',
              value: 7300,
              strokeHeight: 2,
              strokeDashArray: 2,
              strokeColor: '#775DD0',
              transaction:1300,
              revenue:409,
              likes:390,
              users:534,
              

            }
          ]
        }
      ]
    }
  ],
    chart: {
    height: 350,
    // type: 'bar'
  },
  plotOptions: {
    bar: {
      columnWidth: '60%'
    }
  },
  colors: ['#00E396'],
  dataLabels: {
    enabled: false
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Actual', 'Expected'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  }
  };


  let chart = new ApexCharts(document.querySelector(".activity_chart"), options);
  chart.render();

 


  const singleInfo = document.querySelector('.singleinfo')
  const mainBox = document.querySelector('.right2_con')

function calculateTotals(data){
        totalRevenue = 0;
        totalTransactions = 0;
        totalLikes = 0;
        totalUsers = 0;
        data.forEach(item => {
            const Data = item.data;
            Data.forEach(yeardata=>{
                const goals = yeardata.goals[0];
                totalRevenue +=goals.revenue
                totalTransactions +=goals.transaction
                totalLikes +=goals.likes
                totalUsers +=goals.users
            })
            
        });
        return{
            totalLikes,totalRevenue,totalTransactions,totalUsers
        }
}


//   run()
  function run(){
   
    const totals = calculateTotals(options.series);
    mainBox.innerHTML = `<div class="singleinfo">
        <div class="logo">
            <i class="fa-solid fa-download"></i>
        </div>
        <div class="info-1">
            <p> Total Revenue</p>
            <span>$${totals.totalRevenue.toLocaleString()}</span>
        </div>
    </div>
    <div class="singleinfo">
        <div class="logo">
            <i class="fa-solid fa-money-bill-trend-up"></i>
        </div>
        <div class="info-1">
            <p> Total Transactions</p>
            <span>${totals.totalTransactions}</span>
        </div>
    </div>
    <div class="singleinfo">
        <div class="logo">
            <i class="fa-regular fa-thumbs-up"></i>
        </div>
        <div class="info-1">
            <p> Total Likes</p>
            <span>${totals.totalLikes}</span>
        </div>
    </div>
    <div class="singleinfo">
        <div class="logo">
            <i class="fa-solid fa-users"></i>
        </div>
        <div class="info-1">
            <p> Total Users</p>
            <span>${totals.totalUsers}</span>
        </div>
    </div>
    `
        
    }
    run()
    

    
let Options = {
    series: [
    {
      name: 'Actual',
      data: [
        {
          x: '2016',
          y: 1292,
          goals: [
            {
              name: 'Expected',
              value: 1400,
              strokeHeight: 5,
              strokeColor: '#775DD0',
              transaction:1300,
              revenue:8900,
              likes:302,
              users:900,
            

            }
          ]
        },
        {
          x: '2017',
          y: 4432,
          goals: [
            {
              name: 'Expected',
              value: 5400,
              strokeHeight: 5,
              strokeColor: '#775DD0',
              transaction:1300,
              revenue:4500,
              likes:190,
              users:700,
              

            }
          ]
        },
        {
          x: '2018',
          y: 5423,
          goals: [
            {
              name: 'Expected',
              value: 5200,
              strokeHeight: 5,
              strokeColor: '#775DD0',
              transaction:1300,
              revenue:600,
              likes:700,
              users:320,
              

            }
          ]
        },
        {
          x: '2019',
          y: 6653,
          goals: [
            {
              name: 'Expected',
              value: 6500,
              strokeHeight: 5,
              strokeColor: '#775DD0',
              transaction:1300,
              revenue:200,
              likes:680,
              users:120,
              

            }
          ]
        },
        {
          x: '2020',
          y: 8133,
          goals: [
            {
              name: 'Expected',
              value: 6600,
              strokeHeight: 13,
              strokeWidth: 0,
              strokeLineCap: 'round',
              strokeColor: '#775DD0',
              transaction:1300,
              revenue:400,
              likes:700,
              users:540,
              

            }
          ]
        },
        {
          x: '2021',
          y: 7132,
          goals: [
            {
              name: 'Expected',
              value: 7500,
              strokeHeight: 5,
              strokeColor: '#775DD0',
              transaction:1300,
              revenue:450,
              likes:360,
              users:450,
              

            }
          ]
        },
        {
          x: '2022',
          y: 7332,
          goals: [
            {
              name: 'Expected',
              value: 8700,
              strokeHeight: 5,
              strokeColor: '#775DD0',
              transaction:1300,
              revenue:790,
              likes:460,
              users:156,
              

            }
          ]
        },
        {
          x: '2023',
          y: 6553,
          goals: [
            {
              name: 'Expected',
              value: 7300,
              strokeHeight: 2,
              strokeDashArray: 2,
              strokeColor: '#775DD0',
              transaction:1300,
              revenue:409,
              likes:390,
              users:534,
              

            }
          ]
        }
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'bar'
  },
  plotOptions: {
    bar: {
      columnWidth: '60%'
    }
  },
  colors: ['#00E396'],
  dataLabels: {
    enabled: false
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    customLegendItems: ['Actual', 'Expected'],
    markers: {
      fillColors: ['#00E396', '#775DD0']
    }
  }
  };


  let chart2 = new ApexCharts(document.querySelector(".activity_chart2"), Options);
  chart2.render();
//   console.log(chart2)
