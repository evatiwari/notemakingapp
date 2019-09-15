/*const newNote= document.querySelector("#note");
      newNote.addEventListener('click',function(){
      var newDiv= document.createElement('div');
      newDiv.className= 'newnote';
      const grid= document.querySelector('.grid');
      grid.appendChild(newDiv);
      });*/

      var create= document.querySelector('#note');
    create.addEventListener('click',()=>{
      //var note=document.getElementById('textarea').value;
      var note= $('#textarea').val();
      var newDiv= document.createElement('div');
      newDiv.className= 'newnote';
      newDiv.id=Math.floor((Math.random()*100)+1);
      $(newDiv).html("<center><p>"+note+"</p><br><button class='delete'>Delete</button><br><button class='edit'>Edit</button>");
      $('.grid').append(newDiv);
      var del= document.querySelector('.delete');
      del.addEventListener('click',()=>{
        $(`#${newDiv.id}`).remove();
      })
    });


   /* $(document).ready(function () {
      $('#newnote form').submit(function (e) {
          e.preventDefault();
          var request = $.ajax({
              type: "post",
              
              data: {
                  json: JSON.stringify({
                      text: $('#newnote').find('textarea').val(),
                      id: Math.floor((Math.random()*100)+1)
                  })
              },
              dataType: 'json'
          });
  
          request.done(function (note) {
              $('#notes ').append('<div class=note id='+note.id+'>' + note.text + '<br><div class="edit"><a href="#">Edit</a></div><br><div class="delete">Delete</div></div>');
              $('#newnote').find('textarea').val('');
          });
      });
  
      $("#notes").on("click", ".edit", function (e) {
          e.preventDefault();
          var id = $(this).parents().first().attr("data-id");
          alert("You are editing the record with id: " + id);
      });
  });*/