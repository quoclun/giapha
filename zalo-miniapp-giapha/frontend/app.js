fetch('https://<YOUR_BACKEND_URL>/members')
  .then(res => res.json())
  .then(data => {
    const treeDiv = document.getElementById('tree');
    data.forEach(member => {
      const div = document.createElement('div');
      div.textContent = `${member.name} - ${member.relation}`;
      treeDiv.appendChild(div);
    });
  })
  .catch(err => console.error(err));