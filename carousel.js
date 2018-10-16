(function() {
    var kitties = document.getElementsByClassName("kitty");
    var button = document.getElementsByClassName("dot"); //
    var currentpic = 0;
    var max = kitties.length;
    var timer;
    var isTransitioning;

    function moveKitties(dotPositionIndex) {
        console.log("working");
        // check if passed argument is a number. if not,business as usual. If it is a number, stop the cur++ thing and add onscreen class to kitties[passedNumber].
        isTransitioning = true;
        kitties[currentpic].classList.remove("onscreen");
        kitties[currentpic].classList.add("exit");
        button[currentpic].classList.remove("blue");

        if (isNaN(dotPositionIndex)) {
            currentpic++;
            if (currentpic == max) {
                currentpic = 0;
            }
        } else {
            currentpic = dotPositionIndex;
        }
        button[currentpic].classList.add("blue");
        kitties[currentpic].classList.add("onscreen");
    }

    // click handler to figure out which dot was  clicked
    document.getElementById("dotmenu").addEventListener("click", function(e) {
        if (e.target.classList.contains("dot")) {
            var dotPositionIndex = e.target.id.replace("dot", "") - 1;
            console.log(dotPositionIndex);
            if (!isTransitioning) {
                clearTimeout(timer);
                moveKitties(dotPositionIndex);
            }
        }
    });

    // Event listener: when is transition finished ?
    document.addEventListener("transitionend", function(e) {
        // checks "exit", if there is no exit,
        if (e.target.classList.contains("exit")) {
            // Event = transitionend,
            e.target.classList.remove("exit");
            timer = setTimeout(moveKitties, 2500);
            isTransitioning = false;
        }
    });
    setTimeout(moveKitties, 2500);
})();
