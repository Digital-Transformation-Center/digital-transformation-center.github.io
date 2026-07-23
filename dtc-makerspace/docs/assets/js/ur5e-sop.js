document.addEventListener('DOMContentLoaded', function () {
    var warning = document.getElementById('prestart-warning');
    if (!warning) return;

    // Prefer direct id, fallback to anchor-based lookup for Markdown-rendered lists
    var container = document.getElementById('prestart-checklist');
    if (!container) {
        var anchor = document.getElementById('prestart-checklist-anchor');
        if (anchor) {
            // The rendered markdown list is usually the previous sibling (a <ul>).
            var prev = anchor.previousElementSibling;
            if (prev && (prev.tagName.toLowerCase() === 'ul' || prev.tagName.toLowerCase() === 'ol')) {
                container = prev;
            }
        }
    }
    if (!container) return;

    function updateWarning() {
        var checkboxes = container.querySelectorAll('input[type="checkbox"]');
        var allChecked = true;
        if (checkboxes.length === 0) {
            allChecked = false;
        } else {
            for (var i = 0; i < checkboxes.length; i++) {
                if (!checkboxes[i].checked) { allChecked = false; break; }
            }
        }
        warning.style.display = allChecked ? 'none' : 'block';
    }

    updateWarning();
    container.addEventListener('change', function (e) {
        if (e.target && e.target.type === 'checkbox') updateWarning();
    });
});
