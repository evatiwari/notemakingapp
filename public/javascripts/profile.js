const newNote= document.querySelector("#note");
      newNote.addEventListener('click',function(){
      var newDiv= document.createElement('div');
      newDiv.className= 'newnote';
      const grid= document.querySelector('.grid');
      grid.appendChild(newDiv);
      });

      /*var create= document.querySelector('#create');
    create.addEventListener('click',()=>{
      var note=document.getElementById('txt').value;
      var newDiv= document.createElement('div');
      newDiv.className= 'newnote';
      newDiv.appendChild(button)
      $('.newnote').html("<center><p>"+note+"</p><br><button class='delete'>Delete</button><br><button class='edit'>Edit</button>")
    })*/