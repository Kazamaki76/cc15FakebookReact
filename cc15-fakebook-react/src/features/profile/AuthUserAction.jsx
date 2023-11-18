import { PenIcon } from '../../icons';
import ActionButton from './ActionButton';
import Modal from '../../components/Modal';
import { useState } from 'react';
import EditProfileForm from './EditProfileForm.jsx';

export default function AuthUserAction() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <ActionButton onClick={() => setIsOpen(true)}>
        <PenIcon />
        <span className="font-semibold">Edit profile</span>
      </ActionButton>
      <Modal
        open={isOpen}
        title="Edit Profile"
        onClose={() => setIsOpen(false)}
        maxWidth={44}
      >
        <EditProfileForm  onSuccess={() =>setIsOpen(false) } />
      </Modal>
    </div>
  );
}