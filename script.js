function openDiv(){
    document.getElementById("posting").style.transform = 'scale(1)'
}
function closeDiv(){
    document.getElementById("posting").style.transform = 'scale(0)'
}

var text_input = document.getElementById('text');
var btn = document.getElementById('btn');

var text_input = document.getElementById('text');
var btn = document.getElementById('btn');

function btnFunc() {
    if (text_input.value.trim() !== "") {
        btn.style.backgroundColor = '#0861F2';
        btn.style.color = '#fff';
        btn.disabled = false;
        btn.style.cursor = 'pointer';
    } else {
        btn.style.backgroundColor = '#E4E6EB';
        btn.style.color = '#BCC0C4';
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
    }
}

var btn = document.getElementById('btn');

function createPostCard() {
    var text_input = document.getElementById('text').value.trim();

    if (text_input !== "") {
        var postCard = document.createElement('div');
        postCard.className = 'post-card';

        postCard.innerHTML = `
            <div class="card-first">
                <div class="left">
                    <div class="circle"></div>
                    <div class="details">
                        <h4>Abdul Moiz</h4>
                        <p>Just now <i class="ri-circle-fill"></i><i class="ri-earth-fill"></i></p>
                    </div>
                </div>
                <div class="right">
                    <i data-visualcompletion="css-img" class="x1b0d499 xl1xv1r" style="height: 24px; width: 24px; background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/6lkWl0BZTu-.png?_nc_eui2=AeELV7RwXI6W8E1VwgxVuMa88dTwxjBSBT7x1PDGMFIFPhN6IsWih6xqFeyRhqJ_I6Pf5bhu0wVO2O0_xonOcE7Z&quot;); background-position: 0px -37px; background-size: auto; background-repeat: no-repeat; display: inline-block;"></i>
                    <i onclick="this.parentNode.parentNode.parentNode.remove()" id="closing-icon" class="ri-close-fill"></i>
                </div>
            </div>
            <div class="card-second">
                <p>${text_input}</p>
            </div>
            <div class="card-image"></div>
            <div class="card-third">
                <button><i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v4/y4/r/xAljGE-8t8Y.png&quot;); background-position: 0px -798px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i> Like</button>
                <button><i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v4/y4/r/xAljGE-8t8Y.png&quot;); background-position: 0px -588px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i> Comment</button>
                <button><i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v4/y4/r/xAljGE-8t8Y.png&quot;); background-position: 0px -924px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i> Share</button>
            </div>
        `;

        document.getElementById('post-container').appendChild(postCard);

        document.getElementById('text').value = "";

        // function cardImg() {
        //     var imgDiv = document.getElementById('card-image');
        //     var imgInput = document.getElementById('image-inp');
        
        //     if (imgInput.files && imgInput.files[0]) {
        //         var userImage = document.createElement('img');
        //         userImage.src = URL.createObjectURL(imgInput.files[0]);
        //         imgDiv.appendChild(userImage);
        //     }
        // }
        
        

        closeDiv();
    } else {
        alert("Please write something");
    }
}



// function cardContent(){
//     if(text_input.value != ""){
//         var text = document.createElement('p');
//         var send = document.createTextNode(text_input.value);
//         text.appendChild(send);
//         var card_text = document.getElementById('card-text');
//         card_text.appendChild(text);
//     }
//     else{
//         alert("Please write something");
//     }
// }