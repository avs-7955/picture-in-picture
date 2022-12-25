const videoElem = document.getElementById("video")
const btn = document.getElementById("btn")

// Ask the media stream to play, pass to vid elem, and play
async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia()
		videoElem.srcObject = mediaStream
		videoElem.onloadedmetadata = () => {
			videoElem.play()
		}
	} catch (error) {
		// Catch error
		console.log("Error at selectMediaStream: ", error)
	}
}

// On load
selectMediaStream()
