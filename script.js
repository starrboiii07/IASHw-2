    let currentUserRole = '';

    function openTab(evt, tabName) {
      var i,
          tabcontent,
          tablinks;
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
      }
      document.getElementById(tabName).style.display = "block";
      evt.currentTarget.classList.add("active");
    }

    function openPopup(title, message, role) {
      currentUserRole = role;
      if (role === 'student') {
        document.getElementById("popupTitleStudent").innerText = title;
        document.getElementById("popupMessageStudent").innerText = message;
        document.getElementById("popupContainerStudent").style.display = "block";
      } else if (role === 'admin') {
        document.getElementById("popupTitleAdmin").innerText = title;
        document.getElementById("popupMessageAdmin").innerText = message;
        document.getElementById("popupContainerAdmin").style.display = "block";
      }
    }

    function closePopup(role) {
      if (role === 'student') {
        document.getElementById("popupContainerStudent").style.display = "none";
      } else if (role === 'admin') {
        document.getElementById("popupContainerAdmin").style.display = "none";
      }
    }

    function downloadFile() {
      let fileData;
      if (currentUserRole === 'student') {
        fileData = 'COR.png';
      } else if (currentUserRole === 'admin') {
        fileData = 'COR.png';
      }

      const link = document.createElement('a');
      link.href = fileData;
      link.setAttribute('download', 'COR.png');
      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      closePopup();
    }

    function uploadFile() {
      alert("Uploading file...");
      closePopup(currentUserRole);
    }

    const studentCredentials = { username: 'esthephenecastro', password: '@yoko_5abihin' };
    const adminCredentials = { username: 'Sir Montaigne', password: 'Montaigne_Pogi1' };

    document.getElementById('studentLoginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('studentUsername').value;
      const password = document.getElementById('studentPassword').value;
      if (username === studentCredentials.username && password === studentCredentials.password) {
        openPopup('Student Log In', 'You may now download the file.', 'student');
      } else {
        alert('Invalid credentials');
      }
    });

    document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('adminUsername').value;
      const password = document.getElementById('adminPassword').value;
      if (username === adminCredentials.username && password === adminCredentials.password) {
        openPopup('Admin Log In', 'You may now download or upload files.', 'admin');
      } else {
        alert('Invalid credentials');
      }
    });