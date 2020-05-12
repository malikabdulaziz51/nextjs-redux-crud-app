import React from "react";
import Link from "next/link";
import { Button, Card } from "semantic-ui-react";
import NumberFormat from "react-number-format";

const ProductCards = ({ product }) => {
	return (
		<div>
			<div className="wrapper">
				<Card>
					<Card.Content>
						<Card.Header>
							<div className="img-thumb-product">
								<img src={product.photoURI} alt="thumb-product" />
							</div>
							<Link href={`/${product._id}`}>
								<a>{product.name}</a>
							</Link>
							<p>
								<NumberFormat
									value={product.price}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"Rp"}
								/>
							</p>
						</Card.Header>
					</Card.Content>
					<Card.Content extra textAlign={"center"}>
						<Link href={`/${product._id}`}>
							<Button secondary>View</Button>
						</Link>
						<Link href={`/${product._id}/edit`}>
							<Button secondary>Edit</Button>
						</Link>
					</Card.Content>
				</Card>
			</div>
		</div>
	);
};

export default ProductCards;
