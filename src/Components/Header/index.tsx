import {
    HeaderScroll,
    HeaderTop,
    Container,
    HeaderContent,
} from './styled'
import HeaderContentLeft from './Components/HeaderContentLeft'

const Header = () => {
    return (
        <HeaderScroll>
            <HeaderTop >
                <Container>
                    <HeaderContent>
                        <HeaderContentLeft />
                        {/* <HeaderContentRight /> */}
                    </HeaderContent>
                </Container>
            </HeaderTop>
        </HeaderScroll>
    )
}

export default Header