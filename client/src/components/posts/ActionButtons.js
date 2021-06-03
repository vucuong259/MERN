import Button from 'react-bootstrap/Button';
import editIcon from '../../assets/pencil.svg';
import playIcon from '../../assets/play-btn.svg';
import deleteIcon from '../../assets/trash.svg';

const ActionButtons = ({url, _id}) => {
    return (
        <>
            <Button className='post-button' href={url} target='_blank'>
                <img src={playIcon} alt="play" width='32' height='32' />
            </Button>
            <Button className='post-button'>
                <img src={editIcon} alt="edit" width='24' height='24' />
            </Button>
            <Button className='post-button'>
                <img src={deleteIcon} alt="delete" width='24' height='24' />
            </Button>
        </>
    )
}

export default ActionButtons