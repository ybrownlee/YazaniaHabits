const habits = {
    water: "Drink water", walk: "Go on walk",
};
// Object.entries(a): [["water", "Drink water"]]
// .map(b):
const habitButtons = Object.entries(habits).map(function ([habit, habitsDescription]) {
    const habitsButton = document.createElement("button")
    habitsButton.id = habits;
    habitsButton.classList.add("habits-button")
    habitsButton.textContent = habitsDescription
    return habitsButton;
});

habitButtons.forEach(function (habitButtons) {
    document.body.appendChild(habitButtons);
})
console.log(habitButtons);

/*const buttons = document.querySelectorAll('.myButton');
buttons.forEach(button =>) {
    buttons.addEventListener('click', function() {
        alert('Excellent choice');
    });
});
*/

/*const button = document.getElementById('Water');
    button.addEventListener('click', function() {
        alert('Excellent Choice!')
    });
*/


/**<script>
function myFunction() {
    document.getElementById("Drink Water").innerHTML = "IT HAS BEEN DECIDIED "
}
</scriptc */
