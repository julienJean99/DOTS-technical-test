import './App.css';
import _ from "lodash"
import {
    Image,
    Button,
    Container,
    Grid,
    Header
} from "semantic-ui-react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from "react-responsive-carousel"
import background from "./asset/base.png"
import {atom, useRecoilState, useRecoilValue, useSetRecoilState} from "recoil"

const SelectedCard = atom({
    key: 'SelectedCard',
    default: 0
})

var cards = [
    {
	img: require("./asset/car1.png"),
	title: "Envoyer",
	text: "Minus quas aliquid quas numquam vero commodi. Omnis rerum mollitia sint. Expedita deserunt qui pariatur consectetur quis aut nostrum et. Tempora molestiae cupiditate sunt illo consequatur. Vitae tempore asperiores quisquam aut sequi qui. Dolorum doloribus iusto consequuntur qui voluptas quidem"
    },
    {
	img: require("./asset/car2.png"),
	title: "Rechercher",
	text: "Quos quas quasi nihil itaque alias ut. Natus odio enim beatae sed impedit numquam. Porro numquam nemo aut.\nSint earum dignissimos id qui aut minima. Consequuntur quibusdam earum corporis autem distinctio asperiores. Saepe tempore dolorum dolores qui saepe optio reprehenderit. Autem ipsam aut dolor cum fuga iure vel consectetur. Fuga asperiores quo saepe omnis itaque."
    }
]

function renderCarouselCard({img, title, text})
{
    return (
	<Grid.Column
	>
	    <Grid.Row
		style = {{
		    backgroundImage: `url(${background})`,
		    backgroundPosition: "center",
		    backgroundRepeat: "no-repeat",
		    height: "402px"
		}}
	    >
		<Image
		    style = {{
			marginLeft: "auto",
			marginRight: "auto"
		    }}
		    size = "medium"
		    src = {img.default} />
	    </Grid.Row>
	    <Header
		style = {{
		    backgroundColor: "white",
		    margin: "1em",
		    position: "absolute",
		    top: "10em",
		    right: "20em"
		}}
		as = "h1"
		content = {title}
	    />
	    <Container text>
		<p> {text} </p>
	    </Container>
	</Grid.Column>
    )
}

const renderArrow = (text) => (onClick, shouldRender) =>
      {
	  console.log(text, shouldRender)
	  return shouldRender
	      ?
	       null : <Button
		  rounded
		  color = "orange"
		  onClick = {onClick}
	      >
		  {text}
	      </Button>
      }

function App() {
    const selected = useRecoilValue(SelectedCard);
  return (
    <div className="App">
	<header className="App-header">
	    <Carousel
		selectedElement = {selected}
		axis = "horizontal"
		showArrows = {false}
		showIndicators = {false}
		showStatus = {false}
		showThums = {false}
		renderArrowNext = {renderArrow("next")}
		renderArrowPrev = {renderArrow("prev")}
	    >
		{_
		 .chain(cards)
		 .map(renderCarouselCard)
		 .value()
		}
	    </Carousel>
	</header>
    </div>
  );
}

export default App;
