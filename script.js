$(function(){
    console.log('doc ready')
    app.init();
});

const app = {};

let moveCounter = 0
let mistakeCounter = 0

//user sees 16 face down cards 
//user clicks on card and reveals what is hidden underneath
//user clicks on a second card and reveals what is hidden underneath
app.userClick = function() {
    $('.card').on('click', function(){
        $(this).removeClass('overlay').addClass('selected');

        let cardsSelected = $('.selected').length
        app.checkMatch(cardsSelected);

        moveCounter = moveCounter + 1;
        $('.displayMoves').text(moveCounter);

    })
}
//computer evaluates whether the two cards match or not
app.checkMatch = function(n) {
    if (n === 2) {
        
        let selectedArray = $('.selected').get();
        
        //check to see if matching cards are .match1
        if (selectedArray.length === 2 && $('.selected.match1').length === 2) {
            setTimeout(function(){
                $('.selected').addClass('fadeOut')
                setTimeout(function(){
                    $('.selected').addClass('matched').removeClass('selected');
                }, 500)
            }, 1000);

        //check to see if matching cards are .match2
        } else if (selectedArray.length === 2 && $('.selected.match2').length === 2) {
            setTimeout(function(){
                $('.selected').addClass('fadeOut')
                setTimeout(function(){
                    $('.selected').addClass('matched').removeClass('selected');
                }, 500)
            }, 1000);

        //check to see if matching cards are .match3
        } else if (selectedArray.length === 2 && $('.selected.match3').length === 2) {
            setTimeout(function(){
                $('.selected').addClass('fadeOut')
                setTimeout(function(){
                    $('.selected').addClass('matched').removeClass('selected');
                }, 500)
            }, 1000);

        //check to see if matching cards are .match4
        } else if (selectedArray.length === 2 && $('.selected.match4').length === 2) {
            setTimeout(function(){
                $('.selected').addClass('fadeOut')
                setTimeout(function(){
                    $('.selected').addClass('matched').removeClass('selected');
                }, 500)
            }, 1000);
            
        //check to see if matching cards are .match5
        } else if (selectedArray.length === 2 && $('.selected.match5').length === 2) {
            setTimeout(function(){
                $('.selected').addClass('fadeOut')
                setTimeout(function(){
                    $('.selected').addClass('matched').removeClass('selected');
                }, 500)
            }, 1000);
            
        //check to see if matching cards are .match6
        } else if (selectedArray.length === 2 && $('.selected.match6').length === 2) {
            setTimeout(function(){
                $('.selected').addClass('fadeOut')
                setTimeout(function(){
                    $('.selected').addClass('matched').removeClass('selected');
                }, 500)
            }, 1000);
        
        //check to see if matching cards are .match7
        } else if (selectedArray.length === 2 && $('.selected.match7').length === 2) {
            setTimeout(function(){
                $('.selected').addClass('fadeOut')
                setTimeout(function(){
                    $('.selected').addClass('matched').removeClass('selected');
                }, 500)
            }, 1000);
            
        //check to see if matching cards are .match8
        } else if (selectedArray.length === 2 && $('.selected.match8').length === 2) {
            setTimeout(function(){
                $('.selected').addClass('fadeOut')
                setTimeout(function(){
                    $('.selected').addClass('matched').removeClass('selected');
                }, 500)
            }, 1000);
            
        //return cards back to original state
        } else {
            setTimeout(function(){
                $('.selected').addClass('overlay').removeClass('selected')
            }, 1000)
            mistakeCounter = mistakeCounter + 1;
            $('.displayMistakes').text(mistakeCounter);
            
        }
        //function to evaluate if the player won
        let matches = $('.matched').get();
        app.checkWin(matches);
    }
}


//this continues until user matches all pairs of cards & a winning message appears
//issue: I was only able to get this to update the array on a click. it works, but i can't scale difficulty (only need to find 3 matches etc.). if you change 14 to 8 you'll see what I mean.
app.checkWin = function (e) {
    console.log('how many matches', e)
    if (e.length === 14) {
        setTimeout(function(){
            alert('Congratulations! You matched everybody!')
            location.reload();
        }, 1500);
    }
}

app.init = function() {
    app.userClick();
}

//I wasn't able to figure out how to randomize the placement of the cards without using a jQuery plugin which I thought wasn't in the spirit of this project haha.