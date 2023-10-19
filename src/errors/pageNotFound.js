const errPageNotFound = (req, res) => {
	return res.status(404).send('<h3>Page not found 404</h3>');
};

export default errPageNotFound;
