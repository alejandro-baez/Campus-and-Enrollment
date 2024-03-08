const { db, Campus, Student } = require("./server/db/index");

const seed = async () => {
  try {
    await db.sync({ force: true });

    //creating campuses
    const fooState = await Campus.create({
      name: "Foo State",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6f/Frankfurt_School_Campus.jpg ",
      address: "124 Conch St., Bikini Bottom, Pacific Ocean ",
      description:
        "Lore ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit bibendum eleifend. Mauris malesuada nec nibh ut pharetra. Proin pharetra venenatis fermentum. Pellentesque sed ligula maximus, ornare sem sed, placerat sem. Ut nibh quam, consequat ac urna at, commodo tristique ligula.",
    });
    const bazzTech = await Campus.create({
      name: "Bazz Tech",
      address: "42 Wallaby Way, Sydney ",
      description:
        "Phasellus vitae enim nec nunc lacinia aliquam et vel metus. Quisque tempus, odio et maximus rutrum, arcu odio aliquet mauris, quis laoreet tortor nisl non diam. Quisque quam purus, facilisis eget sodales in, efficitur vitae nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    });
    const barCollege = await Campus.create({
      name: "Bar College",
      imageUrl:
        "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?cs=srgb&dl=pexels-pixabay-207692.jpg&fm=jpg",
      address:
        "The Cupboard under the Stairs, 4 Privet Drive, Little Whinging, Surrey ",
      description:
        "Mauris lacini, mauris sit amet sollicitudin egestas, velit justo iaculis magna, a volutpat velit quam nec felis. Quisque posuere scelerisque lorem non pretium. Quisque rhoncus arcu in mattis ornare. Ut quis tortor hendrerit, aliquet velit eget, euismod nulla. Donec sapien tellus, tincidunt id sapien quis, ultrices bibendum tellus.",
    });

    //creating students
    await Student.create({
      firstName: "Julian ",
      lastName: "Casablancas",
      email: "thestrokesband@gmail.com",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/c/c4/Julian_Casablancas_Belfort_2010.jpg",
      gpa: 2.5,
      campusId: bazzTech.id,
    });
    await Student.create({
      firstName: "Eric",
      lastName: "Jackson",
      email: "justaregperson@gmail.com",
      gpa: 3.0,
      campusId: barCollege.id,
    });
    await Student.create({
      firstName: "Linda",
      lastName: "McCartney",
      email: "wings@gmail.com",
      imageUrl:
        "https://www.lindamccartney.com/wp-content/uploads/2018/03/418_33-1024x674.jpg",
      gpa: 3.9,
      campusId: fooState.id,
    });

    db.close();
    console.log("Seeding Successful! Database has info!");
  } catch (err) {
    console.error("Something went wrong!");
    console.error(err);
    db.close();
  }
};

seed();
