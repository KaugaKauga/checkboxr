import { useNavigate } from "react-router-dom"
import { XMarkIcon } from "../../icons/XMarkIcon";
import { IconButton } from "../IconButton"
import { useKeydown } from "../../hooks/useKeydown";

const CloseNavigationButton = () => {
    const navigate = useNavigate();

    useKeydown('Escape', () => navigate('/'));

    return (
        <IconButton
            onClick={() => navigate('/')}
            icon={<XMarkIcon />}
        />
    )
}

export { CloseNavigationButton };
