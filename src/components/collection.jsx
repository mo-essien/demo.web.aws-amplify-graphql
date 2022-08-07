function Collection(collection) {
	return (
		<div>
			{
				collection.map((item) => {
					<div key={ item.id }>
						item.title
					</div>
				})
			}
		</div>
	)
}

export default Collection;