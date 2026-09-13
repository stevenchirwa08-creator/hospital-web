document.addEventListener("DOMContentLoaded", function () {

    const appointmentForm =
        document.getElementById("appointmentForm");

    if (appointmentForm) {

        appointmentForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const patientName =
                document.getElementById("patientName").value;

            const doctor =
                document.getElementById("doctor").value;

            const date =
                document.getElementById("date").value;

            const time =
                document.getElementById("time").value;


            alert(
                "Appointment booked successfully!\n\n" +

                "Patient: " + patientName + "\n" +

                "Doctor: " + doctor + "\n" +

                "Date: " + date + "\n" +

                "Time: " + time
            );

            appointmentForm.reset();

        });

    }

});

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
navMenu.classList.toggle('active');
});