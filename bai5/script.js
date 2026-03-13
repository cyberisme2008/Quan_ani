// LOADING SCREEN

window.addEventListener("load",function(){

    setTimeout(function(){
    
    document.getElementById("loader").style.display="none";
    
    },3000);
    
    });
// Spark effect

document.addEventListener("mousemove", e => {

    const spark = document.createElement("div");
    spark.className = "spark";

    spark.style.left = e.pageX + "px";
    spark.style.top = e.pageY + "px";

    document.body.appendChild(spark);

    setTimeout(()=>{
        spark.remove();
    },500);

});


// MATRIX BACKGROUND

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01MCPLUGINDEV";
const fontSize = 16;

const columns = canvas.width / fontSize;

const drops = [];

for(let x = 0; x < columns; x++){
    drops[x] = 1;
}

function draw(){

    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#0ff";
    ctx.font = fontSize + "px monospace";

    for(let i=0;i<drops.length;i++){

        const text = letters.charAt(
            Math.floor(Math.random()*letters.length)
        );

        ctx.fillText(text,i*fontSize,drops[i]*fontSize);

        if(drops[i]*fontSize > canvas.height && Math.random() > 0.975){
            drops[i] = 0;
        }

        drops[i]++;
    }

}

setInterval(draw,33);
window.addEventListener("load",function(){

    setTimeout(function(){
    
    document.getElementById("loader").style.display="none";
    
    },3000);
    
    });
    function downloadPlugin(file){

        alert("Downloading " + file);
        
        window.location.href="plugins/"+file;
        
        }
        function loadTutorial(topic){

            let content=document.getElementById("tutorial-content");
            
            if(topic=="intro"){
            
            content.innerHTML=`
            
            <h1>Introduction</h1>
            
            <p>Minecraft plugins are created using Java and the Spigot API.</p>
            
            `;
            
            }
            
            if(topic=="setup"){
            
            content.innerHTML=`
            
            <h1>Setup Plugin</h1>
            
            <pre>
            
            public class Main extends JavaPlugin {
            
            @Override
            
            public void onEnable() {
            
            getLogger().info("Plugin Enabled");
            
            }
            
            }
            
            </pre>
            
            `;
            
            }
            
            if(topic=="command"){
            
            content.innerHTML=`
            
            <h1>Create Command</h1>
            
            <pre>
            
            public boolean onCommand(CommandSender sender,
            Command cmd,
            String label,
            String[] args){
            
            sender.sendMessage("Hello!");
            
            return true;
            
            }
            
            </pre>
            
            `;
            
            }
            
            if(topic=="event"){
            
            content.innerHTML=`
            
            <h1>Player Join Event</h1>
            
            <pre>
            
            @EventHandler
            
            public void onJoin(PlayerJoinEvent e){
            
            e.getPlayer().sendMessage("Welcome!");
            
            }
            
            </pre>
            
            `;
            
            }
            
            }
    // SEARCH PLUGIN SYSTEM

const searchInput = document.getElementById("search");

if(searchInput){

searchInput.addEventListener("keyup", function(){

let value = searchInput.value.toLowerCase();

let plugins = document.querySelectorAll(".plugin-card");

plugins.forEach(function(plugin){

let text = plugin.innerText.toLowerCase();

if(text.includes(value)){
plugin.style.display = "block";
}else{
plugin.style.display = "none";
}

});

});

}