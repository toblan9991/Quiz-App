import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
  const pieData = {
    labels: ['Maths', 'English', 'SocialScience','Chemistry', 'Java', 'Python'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 20, 3, 6],
        backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)','rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)','rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',],
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5', 'Level 6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={{ display: 'block',backgroundColor: '#f0f0f0', padding: '40px 20px 120px 20px' }}>
      <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
          <li style={{ display: 'inline', margin: '0 10px' }}><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
          <li style={{ display: 'inline', margin: '0 10px' }}><a href="#quiz" style={{ color: '#fff', textDecoration: 'none' }}>Take Quiz</a></li>
          <li style={{ display: 'inline', margin: '0 10px' }}><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Create Quiz</a></li>
          <li style={{ display: 'inline', margin: '0 10px' }}><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Logout</a></li>
        </ul>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px', boxSizing: 'border-box' }}>
        <div style={{ width: '100%', backgroundColor: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
            <div style={{ width: '30%' }}>
              <h2>Pie Chart</h2>
              <Pie data={pieData} />
            </div>
            <div style={{ width: '35%' }}>
              <h2>Bar Graph</h2>
              <Bar data={barData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



// import React from 'react';
// import { Bar, Pie } from 'react-chartjs-2';
// import 'chart.js/auto';

// const Dashboard = () => {
//   const pieData = {
//     labels: ['Red', 'Blue', 'Yellow'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3],
//         backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
//         borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const barData = {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2, 3],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.2)',
//           'rgba(54, 162, 235, 0.2)',
//           'rgba(255, 206, 86, 0.2)',
//           'rgba(75, 192, 192, 0.2)',
//           'rgba(153, 102, 255, 0.2)',
//           'rgba(255, 159, 64, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//           'rgba(153, 102, 255, 1)',
//           'rgba(255, 159, 64, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div style={{ height: '100vh', backgroundColor: '#f0f0f0' }}>
//       <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
//         <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
//           <li style={{ display: 'inline', margin: '0 10px' }}><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
//           <li style={{ display: 'inline', margin: '0 10px' }}><a href="#quiz" style={{ color: '#fff', textDecoration: 'none' }}>Take Quiz</a></li>
//           <li style={{ display: 'inline', margin: '0 10px' }}><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</a></li>
//         </ul>
//       </nav>
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 40px)', padding: '20px' }}>
//         <div style={{ width: '80%', maxWidth: '1200px', backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
//           <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
//           <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
//             <div style={{ width: '40%' }}>
//               <h2>Pie Chart</h2>
//               <Pie data={pieData} />
//             </div>
//             <div style={{ width: '40%' }}>
//               <h2>Bar Graph</h2>
//               <Bar data={barData} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// // import React from 'react';
// // import { Bar, Pie } from 'react-chartjs-2';
// // import 'chart.js/auto';

// // const Dashboard = () => {
// //   const pieData = {
// //     labels: ['Red', 'Blue', 'Yellow'],
// //     datasets: [
// //       {
// //         label: '# of Votes',
// //         data: [12, 19, 3],
// //         backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
// //         borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
// //         borderWidth: 1,
// //       },
// //     ],
// //   };

// //   const barData = {
// //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
// //     datasets: [
// //       {
// //         label: '# of Votes',
// //         data: [12, 19, 3, 5, 2, 3],
// //         backgroundColor: [
// //           'rgba(255, 99, 132, 0.2)',
// //           'rgba(54, 162, 235, 0.2)',
// //           'rgba(255, 206, 86, 0.2)',
// //           'rgba(75, 192, 192, 0.2)',
// //           'rgba(153, 102, 255, 0.2)',
// //           'rgba(255, 159, 64, 0.2)',
// //         ],
// //         borderColor: [
// //           'rgba(255, 99, 132, 1)',
// //           'rgba(54, 162, 235, 1)',
// //           'rgba(255, 206, 86, 1)',
// //           'rgba(75, 192, 192, 1)',
// //           'rgba(153, 102, 255, 1)',
// //           'rgba(255, 159, 64, 1)',
// //         ],
// //         borderWidth: 1,
// //       },
// //     ],
// //   };

// //   return (
// //     <div style={{ backgroundColor: '#f0f0f0', padding: '5px' }}>
// //       <nav style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0', textAlign: 'center' }}>
// //         <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
// //           <li style={{ display: 'inline', margin: '0 10px' }}><a href="#home" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
// //           <li style={{ display: 'inline', margin: '0 10px' }}><a href="#quiz" style={{ color: '#fff', textDecoration: 'none' }}>Take Quiz</a></li>
// //           <li style={{ display: 'inline', margin: '0 10px' }}><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact Us</a></li>
// //         </ul>
// //       </nav>
// //       <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
// //         <div style={{ width: '70%', backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
// //           <h2>Pie Chart</h2>
// //           <Pie data={pieData} />
// //         </div>
// //         <div style={{ width: '70%', backgroundColor: '#fff', padding: '20px', borderRadius: '5px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
// //           <h2>Bar Graph</h2>
// //           <Bar data={barData} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Dashboard;



// // // // import React from 'react';

// // // // const Dashboard = () => {
// // // //   return (
// // // //     <div style={{ padding: '20px' }}>
// // // //       <h1>Dashboard</h1>
// // // //       <p>Welcome to the dashboard!</p>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Dashboard;
// // // import React from 'react';
// // // import { Bar, Pie } from 'react-chartjs-2';
// // // import 'chart.js/auto';

// // // const Dashboard = () => {
// // //   const pieData = {
// // //     labels: ['Red', 'Blue', 'Yellow'],
// // //     datasets: [
// // //       {
// // //         label: '# of Votes',
// // //         data: [12, 19, 3],
// // //         backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
// // //         borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
// // //         borderWidth: 1,
// // //       },
// // //     ],
// // //   };

// // //   const barData = {
// // //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
// // //     datasets: [
// // //       {
// // //         label: '# of Votes',
// // //         data: [12, 19, 3, 5, 2, 3],
// // //         backgroundColor: [
// // //           'rgba(255, 99, 132, 0.2)',
// // //           'rgba(54, 162, 235, 0.2)',
// // //           'rgba(255, 206, 86, 0.2)',
// // //           'rgba(75, 192, 192, 0.2)',
// // //           'rgba(153, 102, 255, 0.2)',
// // //           'rgba(255, 159, 64, 0.2)',
// // //         ],
// // //         borderColor: [
// // //           'rgba(255, 99, 132, 1)',
// // //           'rgba(54, 162, 235, 1)',
// // //           'rgba(255, 206, 86, 1)',
// // //           'rgba(75, 192, 192, 1)',
// // //           'rgba(153, 102, 255, 1)',
// // //           'rgba(255, 159, 64, 1)',
// // //         ],
// // //         borderWidth: 1,
// // //       },
// // //     ],
// // //   };

// // //   return (
// // //     <div style={{ padding: '20px' }}>
// // //       <nav>
// // //         <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
// // //           <li><a href="#home">Home</a></li>
// // //           <li><a href="#contact">Contact Us</a></li>
// // //           <li><a href="#quiz">Take Quiz</a></li>
// // //         </ul>
// // //       </nav>
      
// // //       <div style={{ display: 'flex', justifyContent: 'space-around' }}>
// // //         <div style={{ width: '40%' }}>
// // //           <h2>Pie Chart</h2>
// // //           <Pie data={pieData} />
// // //         </div>
// // //         <div style={{ width: '40%' }}>
// // //           <h2>Bar Graph</h2>
// // //           <Bar data={barData} />
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Dashboard;
