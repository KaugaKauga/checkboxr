import { useTodoStore } from "../../helpers/store"
import { HamburgerMenuIcon } from "../../icons/HamburgerMenuIcon"
import { IconButton } from "../IconButton"

const SidebarToggleBtn = () => {
    const toggleSidebar = useTodoStore(state => state.toggleSidebar);

    return (
        <IconButton icon={<HamburgerMenuIcon />} onClick={() => toggleSidebar()} />
    )
}

export { SidebarToggleBtn }