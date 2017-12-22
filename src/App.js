


import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";


import { ajoute_stock } from "./services/projet/actions";
import { supprime_stock } from "./services/projet/actions";
import { increment_stock } from "./services/projet/actions";
import { decrement_stock } from "./services/projet/actions";
import { ajoute_panier } from "./services/projet/actions";
import { increment_panier } from "./services/projet/actions";
import { decrement_panier } from "./services/projet/actions";
import { valide_commande } from "./services/projet/actions";
import { valide_edit } from "./services/projet/actions";
import { setPanier1 } from "./services/projet/actions";
import { setPanier2 } from "./services/projet/actions";
import { increment_stock2 } from "./services/projet/actions";
import { decrement_stock2 } from "./services/projet/actions";







class App extends Component {

	state = {

		magasin_valid: false,
		name: "",
		image: "",
		price: "",
		description: "",
		URL:"",
		stock:0,
		panier:0,
		index: -1,
		nameEdit: "",
		imageEdit: "",
		priceEdit: "",
		descriptionEdit: "",
		URLEdit:"",
		panierActif: false,
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="magasin">{this.state.magasin}</h1>

					{
					!this.state.magasin_valid ?
					<div>
					<input
						style={{
							height: 20,
							width: 167,
						}}
						type='text'
						placeholder={"Entrer le nom de votre magasin"}
						value={this.state.magasin}
						onChange={(e) => this.setState({ magasin: e.target.value })}
						onKeyPress={(e) => {
							if (e.key === "Enter") {
								this.setState({ magasin_valid: true })}
							}
						}
					/>

					</div>

					:
					<div>
					</div>		
				}
				
				</header>

				{
					!this.state.magasin_valid ?
						null
					:
						<div class="container">
							<div className="module">
								<h1>Store</h1>
								<ul>
									{
										this.props.projet.items.map((item, index) => {
											console.log(item);
											return (
												<li
													key={item.id}
												>
												NOM: 
												{item.name}
												<br/>
												PRIX: 
												{item.price}
												<br></br>
												DESCRIPTION: 
												{item.description}
												<br></br>
												<img 
													style = {{width:"40%"}}
													src = {item.URL}
												/>
												<br></br>
												STOCK: 
												{item.stock}
												<br></br>


												{
													item.stock > 0 ?
														
															item.panierActif ?
																<hr/>
															:	

															
																<div>								
																<button
																	style={{
																		width: "98%",
																		height: 30,

																	}}
																	onClick = {() => {this.props.ajoute_panier(index);
																					this.props.setPanier1(index)}
																	}
																>
																Ajouter au panier
																</button>
																<hr/>
																</div>
														
												
														
													:
													<div>
													<hr/>
													</div>
												}
												</li>
											)
										})
									}
								</ul>
							</div>

							<div className="module">
								<h1>Panier</h1>
								<ul>
									{this.props.projet.panier.map((achat, index) => {
										return (
											<li key={achat.id} >

											NOM: 
											{achat.name}
											<br></br>
											PRIX: 
											{achat.price}
											<br></br>
											<img 
												style = {{width:"40%"}}
												src = {achat.URL}
											/>
											<br></br>
											PRODUITS COMMANDE: 
											{achat.panier}
											<br></br>

											{
												achat.stock > 0 ?
													<div>
													{
														achat.panier > 0 ?
															<div>
																<button
																	style={{
																		width: 30,
																		height: 30,
																	}}
																	onClick={() => {this.props.decrement_panier(index);
																					this.props.increment_stock2(achat.id)}
																	}
																>
																-
																</button>
																<button
																	style={{
																		width: 30,
																		height: 30,
																	}}
																	onClick={() => {this.props.increment_panier(index)
																					this.props.decrement_stock2(achat.id)}
																	}
																>
																+
																</button>
															</div>
														:
															<button
																style={{
																	width: 30,
																	height: 30,
																}}

																onClick={() => {this.props.increment_panier(index)
																				this.props.decrement_stock2(achat.id)}
																	}
															>
															+
															</button>

													}
													<button
														style={{
															width: "98%",
															height: 30,
														}}

														onClick={() => {this.props.valide_commande(index);
																	this.props.setPanier2(achat.id)}
																	
														}
													>
													Valider commande
													</button>
													<hr/>	
													</div>
												:
													<div>
													<button
														style={{
															width: 30,
															height: 30,
														}}

														onClick={() => {this.props.decrement_panier(index);
																		this.props.increment_stock2(achat.id)}
														}
													>
													-
													</button>
													<button
														style={{
															width: "98%",
															height: 30,
														}}

														onClick={() => {this.props.valide_commande(index);
																	this.props.setPanier2(achat.id);
																	
														}
													}
													>
													Valider commande
													</button>
													<hr/>	
													
													</div>
											}

											</li>
										)}
									)}
								</ul>
							</div>

							<div className="module">
								<h1>Iventaire</h1>

								<input
									style={{
										height: 25,
										width: "98%",
									}}
									type='text'
									placeholder={"Nom de l'artiste"}
									value={this.state.name}
									onChange={(e) => this.setState({ name: e.target.value })}

								/>
								<br></br>
								<input
									style={{
										height: 25,
										width: "98%",
									}}
									type='text'
									placeholder={"Prix"}
									value={this.state.price}
									onChange={(e) => this.setState({ price: e.target.value })}

								/>


								<br></br>
								<input
									style={{
										height: 25,
										width: "98%",
									}}
									type='text'
									placeholder={"Description"}
									value={this.state.description}
									onChange={(e) => this.setState({ description: e.target.value })}
								/>

								<br></br>
								<input
								
									style={{
										height: 25,
										width: "98%",
									}}

									type='text'
									placeholder={"URL"}
									value={this.state.URL}
									onChange={(e) => this.setState({ URL: e.target.value })}
								/>

								<br></br>
								<button
									style={{
										width: "98%",
										height: 30,
										margin: 4,
									}}



									onClick = {() => {

									if (isNaN(parseFloat(this.state.price))) {
										alert("Votre prix n'est pas correcte");
									} else {

										this.props.ajoute_stock({
										id: Date.now(),
										name: this.state.name,
										price:this.state.price,
										description:this.state.description,
										URL:this.state.URL,
										stock:this.state.stock,
										panier:this.state.panier,
										panierActif:this.state.panierActif,
										});

											this.setState({
												name: "",
												price: "",
												description:"",
												URL:"",
											});
										}
									}
								}
								>
									Ajouter
								</button>



								<div>
									<ul>
										{
											this.props.projet.items.map((item, index) => {
												return (
													<div>
														{
															this.state.index == index ?
															<div> 

															<input
																style={{
																	height: 25,
																	width: "80%",
																}}
																type='text'
																placeholder={item.name}
																value={this.state.nameEdit}
																onChange={(e) => this.setState({ nameEdit: e.target.value })}

															/>
															<br></br>
															<input
																style={{
																	height: 25,
																	width: "80%",
																}}
																type='text'
																placeholder={item.price}
																value={this.state.priceEdit}
																onChange={(e) => this.setState({ priceEdit: e.target.value })}

															/>


															<br></br>
															<input
																style={{
																	height: 25,
																	width: "80%",
																}}
																type='text'
																placeholder={item.description}
																value={this.state.descriptionEdit}
																onChange={(e) => this.setState({ descriptionEdit: e.target.value })}
															/>

															<br></br>
															<input
															
																style={{
																	height: 25,
																	width: "80%",
																}}

																type='text'
																placeholder={item.URL}
																value={this.state.URLEdit}
																onChange={(e) => this.setState({ URLEdit: e.target.value })}
															/>

															<br></br>

															<button
																style={{
																	width: "82%",
																	height: 30,
																}}

																onClick={() => { this.props.valide_edit(index, {id: Date.now(),
																									name: this.state.nameEdit,
																									price:this.state.priceEdit,
																									description:this.state.descriptionEdit,
																									URL:this.state.URLEdit,
																									});
																				this.setState({	nameEdit: "",
																							priceEdit: "",
																							descriptionEdit:"",
																							URLEdit:"",
																							index : -1,
																							});
																					
																					console.log(this.props.projet.panier);
																		}
																	}
															>
															Valider Edition
															</button>

															

															 </div>
														:
														<div>


															<li
																key={item.id}
															>
															NOM: 
															{item.name}
															<br></br>
															PRIX: 
															{item.price}
															<br></br>
															DESCRIPTION: 
															{item.description}
															<br></br>
															<img 
																style = {{width:"40%"}}
																src = {item.URL}	
															/>
															<br></br>
															STOCK: 
															{item.stock}
															<br></br>


															{
																item.stock > 0 ?
																<div>
																<button
																	style={{
																		width: 30,
																		height: 30,
																	}}

																	onClick={() => this.props.increment_stock(index)}
																>
																+
																</button>
																<button
																	style={{
																		width: 30,
																		height: 30,
																	}}

																	onClick={() => this.props.decrement_stock(index)}
																>
																-
																</button>								
																<br></br>
																</div>

															: 
																<div>
																<button
																	style={{
																		width: 30,
																		height: 30,
																	}}
																	onClick={() => this.props.increment_stock(index)}
																>
																+
																</button>
																<br></br>
																</div>

															}

															<button
																style={{
																	width: 75,
																	height: 30,
																	margin: 5,

																}}
																onClick = {() => {this.props.supprime_stock(index)}}
															>
																Supprimer
															</button>
															<br></br>
															<button
																style={{
																	width: 75,
																	height: 30,
																	margin: 5,

																}}
																onClick={() => {
																	this.setState({
																		index: index
																	})
																}}
															>
															Editer
															</button>
															<br></br>


															</li>
															<hr />
														</div>
													}
												</div>
												)
											})
										}
									</ul>
								</div>
							</div>
						</div>
				}

			</div>
		);
	}

}


const mapStateToProps = (state) => ({
	state: state,
	projet: state.projet,
});


const mapActionsToProps = (dispatch) => ({
	ajoute_stock: bindActionCreators(ajoute_stock, dispatch),
	supprime_stock: bindActionCreators(supprime_stock, dispatch),
	increment_stock: bindActionCreators(increment_stock, dispatch),
	decrement_stock: bindActionCreators(decrement_stock, dispatch),
	ajoute_panier: bindActionCreators(ajoute_panier, dispatch),
	increment_panier: bindActionCreators(increment_panier, dispatch),
	decrement_panier: bindActionCreators(decrement_panier, dispatch),
	valide_commande: bindActionCreators(valide_commande, dispatch),
	valide_edit: bindActionCreators(valide_edit, dispatch),
	setPanier1: bindActionCreators(setPanier1, dispatch),
	setPanier2: bindActionCreators(setPanier2, dispatch),
	increment_stock2: bindActionCreators(increment_stock2, dispatch),
	decrement_stock2: bindActionCreators(decrement_stock2, dispatch),
	
});


export default connect(mapStateToProps, mapActionsToProps)( App );
