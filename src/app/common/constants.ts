export const RADAR_OPTIONS = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 0.87)', // Set legend text color for dark mode
          filter: (item, chart) => {
            // Return false if the label is undefined, null, or an empty string
            return item.text && item.text.length > 0;
          },
        }
      }
    },
    scales: {
      r: {
        min: 0, // Set the minimum value for the radial axis
        grid: {
          color: 'rgba(255, 255, 255, 0.1)' // Set radial grid color for dark mode
        },
        angleLines: {
          color: 'rgba(255, 255, 255, 0.1)' // Set angle lines color for dark mode
        },
        pointLabels: {
          font: {
            size: 14
          },
          color: 'rgba(255, 255, 255, 0.87)' // Set point labels text color for dark mode
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.1)', // Set ticks color for dark mode
          backdropColor: 'rgba(0, 0, 0, 0)' // Remove the backdrop color around tick labels for dark mode
        }
      }
    }
  };