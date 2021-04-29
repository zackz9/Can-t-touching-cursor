const btn = document.getElementById('touchB');

const OFFSET = 100;

btn.addEventListener('click', () => {
    alert('Nice')
    window.close()
})

document.addEventListener('mousemove', (e) => {

    const x = e.pageX;
    const y = e.pageY;
    const btnBox = btn.getBoundingClientRect();


    const horiDistanceFrom = distanceFromCenter(btnBox.x, x, btnBox.width);
    const vertiDistanceFrom = distanceFromCenter(btnBox.y, y, btnBox.height);
    
    const horizontalOffset = btnBox.width / 2 + OFFSET;
    const verticalOffset = btnBox.height / 2 + OFFSET;


    if(Math.abs(horiDistanceFrom) <= horizontalOffset && Math.abs(vertiDistanceFrom) <= verticalOffset ) {

        setButtonPosition(
            btnBox.x + horizontalOffset / horiDistanceFrom * 10,
            btnBox.y + verticalOffset / vertiDistanceFrom * 10
        )

    }


    // console.log(horiDistanceFrom, vertiDistanceFrom);
    // console.log(x, y);
    // console.log(btnBox.x, btnBox.y);
})

function setButtonPosition(left, top) {

    const windowBox = document.body.getBoundingClientRect();
    const btnBox = btn.getBoundingClientRect();

    //Checking position
    if(distanceFromCenter(left, windowBox.left, btnBox.width) < 0) {

        left = windowBox.right - btnBox.width - OFFSET;

    }

    if(distanceFromCenter(left, windowBox.right, btnBox.width) >  0) {

        left = windowBox.left + OFFSET;

    }

    if(distanceFromCenter(top, windowBox.top, btnBox.height) <  0) {

        top = windowBox.bottom + btnBox.height - OFFSET;

    }

    if(distanceFromCenter(top, windowBox.bottom, btnBox.height) >  0) {

        top = windowBox.top + OFFSET;

    }

    btn.style.left = `${left}px`;

    btn.style.top = `${top}px`;

    console.log(left, top);
}

function distanceFromCenter(boxPosition, mousePosition, boxSize) {

    return boxPosition - mousePosition + boxSize / 2 ;
}