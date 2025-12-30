const FooterSection = () => {
	return (
		<footer>
			<div className="tiles-footer">
				<div className="tiles-footer__btn-container">
					<button className="tiles-footer__btn tiles-footer__btn--back-btn">
						Back
					</button>
					<button className="tiles-footer__btn tiles-footer__btn--next-btn">
						Next
					</button>
				</div>
				<p className="tiles-footer__link-container">
					<a className="tiles-footer__link" href="#">
						Skip this and take me to the dashboard
					</a>
				</p>
			</div>
		</footer>
	);
};

export default FooterSection;
