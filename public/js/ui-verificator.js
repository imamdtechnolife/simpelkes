    //render room data
    const renderRoom = (data) => {

      const room = `<li class="tab col s3"><a href="#${data.room_name}">${data.room_name}</a></li>`;

      // tab.innerHTML = room;
      tab.innerHTML += room;
     
      console.log('render room success!');

    };
      
