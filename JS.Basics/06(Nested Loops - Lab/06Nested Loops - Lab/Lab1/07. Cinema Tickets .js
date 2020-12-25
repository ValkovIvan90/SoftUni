function cinemaTicket(input) {
  let film = input.shift();

  let totalSoldTickets = 0;//брой на всички билети
  let totalStudentTickets = 0;//брой на студентските билети
  let totalStandardTickets = 0;//брой на стандартните билети
  let totalKidsTickets = 0;//брой на детските билети

  while (film !== "Finish") {

    let capacity = Number(input.shift());

    let ticket = input.shift();

    let soldTickets = 0;//продадени билети

    let students = 0;
    let standard = 0;
    let kids = 0;

    while ((ticket !== "End") && (soldTickets < capacity)) {

      switch (ticket) {

        case "student":
          students++;
          break;
        case "standard":
          standard++;
          break;
        case "kid":
          kids++
          break;
      }
      soldTickets++;
      ticket = input.shift();
    }

    let capacityPerce = (soldTickets / capacity) * 100;// пропцент от капацитета
    console.log(`${film} - ${capacityPerce.toFixed(2)}% full.`);

    totalSoldTickets += (students + standard + kids);//брой на всички билети
    totalStandardTickets += standard;//брий на стандартните билети
    totalStudentTickets += students;//брой на студентските билети
    totalKidsTickets += kids;//брой на детските билети

    if (ticket === "Finish") {
      break;
    } else if (soldTickets < capacity) {
      film = input.shift();
    } else {
      film = ticket;
    }

  }
  console.log(`Total tickets: ${totalSoldTickets}`);

  console.log(`${((totalStudentTickets / totalSoldTickets) * 100).toFixed(2)}% student tickets.`)
  console.log(`${((totalStandardTickets / totalSoldTickets) * 100).toFixed(2)}% standard tickets.`)
  console.log(`${((totalKidsTickets / totalSoldTickets) * 100).toFixed(2)}% kids tickets.`)

}
cinemaTicket([
  'Taxi', '10',
  'standard', 'kid',
  'student', 'student',
  'standard', 'standard',
  'End', 'Scary Movie',
  '6', 'student',
  'student', 'student',
  'student', 'student',
  'student', 'Finish'
]
)