// Define the gage
var config1 = liquidFillGaugeDefaultSettings();
config1.maxValue = 100;
config1.circleColor = "#CC6600";
config1.textColor = "#000000";
config1.waveTextColor = "#FFFFFF";
config1.waveColor = "#CC6600";
config1.circleThickness = 0.2;
config1.waveAnimateTime = 3000;
config1.waveHeight = .1;
// config1.displayPercent = false;
config1.waveCount = 1;
var gauge = loadLiquidFillGauge("fillgauge", ((1000/3500)*100).toFixed(1), config1);

function NewValue() {
    if (Math.random() > .5) {
        return Math.round(Math.random() * 100);
    } else {
        return (Math.random() * 100).toFixed(1);
    }
}