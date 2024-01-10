function VideoModal({ videoId,title }){
	return (
		<div className="modal fade"	id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h1 className="modal-title fs-5" id="exampleModalLabel">{title}</h1>
						<button	type="button" className="btn-close"	data-bs-dismiss="modal"	aria-label="Close"></button>
					</div>
					<div className="modal-body">
						<iframe	width="100%" height="315" src={`https://www.youtube.com/embed/${videoId}?mute=1`}></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VideoModal