//your JS code here. If required.
   // Utility function to create a promise that resolves after a random delay
    function createTimedPromise(index) {
      const delay = Math.random() * 2000 + 1000; // between 1000 and 3000 ms
      const startTime = performance.now();

      return new Promise(resolve => {
        setTimeout(() => {
          const endTime = performance.now();
          const timeTaken = ((endTime - startTime) / 1000).toFixed(3); // in seconds
          resolve({ index, time: timeTaken });
        }, delay);
      });
    }

    const promises = [
      createTimedPromise(1),
      createTimedPromise(2),
      createTimedPromise(3)
    ];

    const tbody = document.getElementById("output");

    const startAll = performance.now();

    Promise.all(promises).then(results => {
      const endAll = performance.now();
      const totalTime = ((endAll - startAll) / 1000).toFixed(3);

      // Clear the "Loading..." row
      tbody.innerHTML = '';

      // Add each promise result row
      results.forEach(result => {
        const row = document.createElement('tr');

        const promiseCell = document.createElement('td');
        promiseCell.textContent = `Promise ${result.index}`;

        const timeCell = document.createElement('td');
        timeCell.textContent = result.time;

        row.appendChild(promiseCell);
        row.appendChild(timeCell);
        tbody.appendChild(row);
      });

      // Add total row
      const totalRow = document.createElement('tr');

      const totalLabelCell = document.createElement('td');
      totalLabelCell.textContent = 'Total';

      const totalTimeCell = document.createElement('td');
      totalTimeCell.textContent = totalTime;

      totalRow.appendChild(totalLabelCell);
      totalRow.appendChild(totalTimeCell);
      tbody.appendChild(totalRow);
    });