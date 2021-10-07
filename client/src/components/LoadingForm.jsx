function LoadingForm() {
	return (
		<>
			<div className="mt-6">
				<lottie-player
					src="https://assets4.lottiefiles.com/packages/lf20_WXXDFD.json"
					background="transparent"
					speed="1"
					style={{
						width: "300px",
						height: "50px",
						marginLeft: "40%",
					}}
					loop
					autoplay
				></lottie-player>
			</div>
		</>
	);
}

export default LoadingForm;
