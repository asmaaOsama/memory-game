var array=['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H'],
	memory_value=[],
	memory_tile_ids=[],
	tile_flipped=0;
	Array.prototype.memory_shuffle = function() {
		var i=this.length,j,temp;
		while(i-->0){
			j=Math.floor(Math.random()*(i+1));
			temp=this[j];
			this[j]=this[i];
			this[i]=temp;
			// console.log(i);
			// console.log(this[i]);
			// console.log(j);
			console.log(this[j]);
		}
	}
	function newBoard() {
		tile_flipped=0;
		var output="";
		array.memory_shuffle();
		for (var i = 0; i < array.length; i++) {
			output+='<div id="tile_'+i+'" onclick="memoryfliptile(this,\''+array[i]+'\')"></div>';
		}
		document.getElementById('memory_board').innerHTML=output;
	}
	newBoard();
	function memoryfliptile(tile,val) {
		if (tile.innerHTML=="" && memory_value,length<2) {
			tile.style.background='#fff';
			tile.innerHTML=val;
			if(memory_value.length==0){
				memory_value.push(val);
				memory_tile_ids.push(tile.id);
			}
			else if(memory_value.length==1){
				memory_value.push(val);
				memory_tile_ids.push(tile.id);

				if (memory_value[0]==memory_value[1]) {
					tile_flipped+=2;
					memory_value=[];
					memory_tile_ids=[];


					if (tile_flipped==array.length) {
						alert("new-board");
						// document.getElementById('memory_board').innerHTML="";
						newBoard();
					}

				}
				else {
					function flip2back() {
						var tile_1=document.getElementById(memory_tile_ids[0]);
						var tile_2=document.getElementById(memory_tile_ids[1]);
						tile_1.style.background="url(black-box.jpg)";
						tile_1.innerHTML="";
						tile_2.style.background="url(black-box.jpg)";
						tile_2.innerHTML="";
						memory_value=[];
						memory_tile_ids=[];
					}
					setTimeout(flip2back,500);
				}
			}
		}
	}