var katzDeliLine = []
var numberPicker = 1

function takeANumber() {
  katzDeliLine.push(numberPicker)
  numberPicker += 1
  return numberPicker - 1
}

function nowServing() {
  var nowServingAnnouncement
  if (katzDeliLine.length === 0) {
    nowServingAnnouncement = `There is nobody waiting to be served!`
  } else {
    nowServingAnnouncement = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  }
  return nowServingAnnouncement
}

function currentLine(katzDeliLine) {
  var currentLineAnnouncement
    if (katzDeliLine.length === 0) {
      currentLineAnnouncement = `The line is currently empty.`
    } else {
      currentLineAnnouncement = `The line is currently:`
      for (var i = 0; i < katzDeliLine.length; i += 1) {
        currentLineAnnouncement = currentLineAnnouncement + ` ${i + 1}. ${katzDeliLine[i]},`
      }
      currentLineAnnouncement = currentLineAnnouncement.slice(0,-1)
    }
  return currentLineAnnouncement
}
