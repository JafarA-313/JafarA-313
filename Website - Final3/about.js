document.addEventListener('DOMContentLoaded', () => {
    const groupHeaders = document.querySelectorAll('.team-group-header');

    groupHeaders.forEach((header) => {
        header.addEventListener('click', () => {
            const group = header.parentElement;
            const groupBody = group.querySelector('.team-group-body');
            const icon = header.querySelector('i');

            // Toggle icon
            icon.classList.toggle('fa-plus');
            icon.classList.toggle('fa-minus');

            // Toggle visibility of body
            groupBody.classList.toggle('open');

            // Close other open groups
            document.querySelectorAll('.team-group').forEach((otherGroup) => {
                if (otherGroup !== group) {
                    const otherGroupBody = otherGroup.querySelector('.team-group-body');
                    const otherIcon = otherGroup.querySelector('.team-group-header i');
                    otherGroupBody.classList.remove('open');
                    otherIcon.classList.remove('fa-minus');
                    otherIcon.classList.add('fa-plus');
                }
            });
        });
    });
});
