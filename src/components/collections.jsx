function Collections(collections) {
	return (
		<div>
			{
				collections.map((collection) => {
					<div key={ collection.id }>
						collection.title
					</div>
				})
			}
		</div>
	)
}

export default Collections;