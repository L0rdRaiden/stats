
// x axis for may-2017 dataset
var mayx = ["Apr-11","May-11","Jun-11","Jul-11","Aug-11","Sep-11","Oct-11","Nov-11","Dec-11","Jan-12","Feb-12","Mar-12","Apr-12","May-12","Jun-12","Jul-12","Aug-12","Sep-12","Oct-12","Nov-12","Dec-12","Jan-13","Feb-13","Mar-13","Apr-13","May-13","Jun-13","Jul-13","Aug-13","Sep-13","Oct-13","Nov-13","Dec-13","Jan-14","Feb-14","Mar-14","Apr-14","May-14","Jun-14","Jul-14","Aug-14","Sep-14","Oct-14","Nov-14","Dec-14","Jan-15","Feb-15","Mar-15","Apr-15","May-15","Jun-15","Jul-15","Aug-15","Sep-15","Oct-15","Nov-15","Dec-15","Jan-16","Feb-16","Mar-16","Apr-16","May-16","Jun-16","Jul-16","Aug-16","Sep-16","Oct-16","Nov-16","Dec-16","Jan-17","Feb-17","Mar-17","Apr-17","May-17"];


var obj = new Object();
	obj.labs = mayx; //labels
	obj.name = "All commodities";
	obj.data = [97.1,97.7,98.2,98.6,99.2,100.1,100.5,100.8,100.9,101.6,102.1,103.4,104.7,105.3,105.3,106.2,106.9,107.6,107.4,107.3,107.1,108.0,108.4,108.6,108.6,108.6,110.1,111.2,112.9,114.3,114.6,114.3,113.4,113.6,113.6,114.3,114.1,114.8,115.2,116.7,117.2,116.4,115.6,114.1,112.1,110.8,109.6,109.9,110.2,111.4,111.8,111.1,110.0,109.9,110.1,109.9,109.4,108.0,107.1,107.7,109.0,110.4,111.7,111.8,111.2,111.4,111.5,111.9,111.7,112.6,113.0,113.2,113.2,112.8];

function loadChart(o)
{
	var ctx = document.getElementById("myChart").getContext('2d');
	var myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels: o.labs,
			datasets: [{
				label: o.name,
				data: o.data,
				backgroundColor: [
					'rgba(255,255,255,0)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}]
		},
		options: {
			scales: {
				yAxes: [{
					ticks: {
						
					}
				}]
			}
		}
	});
}   

//loadChart(obj);
var commodities = null;
function loadDatasets()
{
	var datasets = JSON.parse(may);
	commodities = datasets.commodities;
	
	for(var i = 0; i < commodities.length; i++)
	{
		createLI(commodities[i].name);
	}
}
loadDatasets();
function createLI(name)
{
	var abc = document.getElementById("menu-ul").innerHTML;
	abc += "<li onclick=\"grabData(this);\">" + name + "</li>";
	document.getElementById("menu-ul").innerHTML = abc;
}

// show/hide menu--------
var menuHidden = true;
function showHideMenu()
{
	
	if(menuHidden)
	{
		//show menu;
		document.getElementById("menu-id").style.marginLeft = "0px";
		menuHidden = false;
	}
	else
	{
		//hide menu;
		document.getElementById("menu-id").style.marginLeft = "-200px";
		menuHidden = true;
	}
}
//------------

function grabData(t)
{
	var i = 0;
	for(i = 0; i < commodities.length; i++)
	{
		if(commodities[i].name == t.innerHTML)
		{ break; }
	}
	obj.name = commodities[i].name;
	obj.data = commodities[i].data;
	
	loadChart(obj);
	
}