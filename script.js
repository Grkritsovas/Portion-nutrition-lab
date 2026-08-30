const menuButton =
  document.querySelector('.menu-toggle');

const menu =
  document.querySelector('.main-nav');


function closeMenu() {

  menu.classList.remove('open');

  menuButton.classList.remove('active');

  menuButton.setAttribute(
    'aria-expanded',
    'false'
  );

}


menuButton.addEventListener(
  'click',
  () => {

    const isOpen =
      menu.classList.toggle('open');

    menuButton.classList.toggle(
      'active',
      isOpen
    );

    menuButton.setAttribute(
      'aria-expanded',
      String(isOpen)
    );

  }
);


menu
  .querySelectorAll('a')
  .forEach(link => {

    link.addEventListener(
      'click',
      closeMenu
    );

  });


document.addEventListener(
  'click',
  event => {

    if (
      !menu.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {

      closeMenu();

    }

  }
);


document.addEventListener(
  'keydown',
  event => {

    if (event.key === 'Escape') {

      closeMenu();

    }

  }
);

window.addEventListener('scroll', () => {
  closeMenu();
});

/* =========================
   SPECIALTY POPUPS
   ========================= */

const specialtyDialog =
  document.querySelector('#specialty-dialog');

const dialogTitle =
  document.querySelector('#dialog-title');

const dialogContent =
  document.querySelector('#dialog-content');

const dialogClose =
  document.querySelector('.dialog-close');


const specialtyContent = {

  weight: {
    title: 'Διαχείριση Βάρους & Καθημερινή Διατροφή',
    paragraphs: [
      'Η υποστήριξη μπορεί να αφορά απώλεια, αύξηση ή διατήρηση βάρους, καλύτερη οργάνωση των γευμάτων και σταδιακή βελτίωση των διατροφικών συνηθειών.',
      'Μπορεί να περιλαμβάνει αξιολόγηση σύστασης σώματος και παρακολούθηση της πορείας, με ένα πλάνο που προσαρμόζεται στο ωράριο, τις προτιμήσεις και την καθημερινότητα του ατόμου.',
      'Στόχος δεν είναι ένα αυστηρό πρόγραμμα που εφαρμόζεται προσωρινά, αλλά μια προσέγγιση που μπορεί να διατηρηθεί και να περιλαμβάνει φαγητά που πραγματικά απολαμβάνετε.'
    ]
  },

  sport: {
    title: 'Αθλητική Διατροφή',
    paragraphs: [
      'Η διατροφική στρατηγική προσαρμόζεται στο άθλημα, τη συχνότητα και την ένταση της προπόνησης, με στόχο την υποστήριξη της ενέργειας, της απόδοσης, της αποκατάστασης και της σωματικής σύστασης.',
      'Η καθοδήγηση μπορεί να προσαρμοστεί σε αθλήματα αντοχής, ομαδικά και μαχητικά αθλήματα, αλλά και σε ασκούμενους που θέλουν να οργανώσουν καλύτερα τη διατροφή τους γύρω από την προπόνηση.',
      'Ανάλογα με τις ανάγκες και τις προτιμήσεις, μπορεί να περιλαμβάνει αναλυτικές ποσότητες και μακροθρεπτικά συστατικά ή ένα πιο ευέλικτο πλαίσιο διατροφής.'
    ]
  },

  clinical: {
    title: 'Κλινική Διατροφή & Ειδικές Καταστάσεις',
    paragraphs: [
      'Παρέχεται εξατομικευμένη διατροφική υποστήριξη σε παθολογικές και χρόνιες καταστάσεις όπου η διατροφή αποτελεί μέρος της συνολικής φροντίδας, όπως σακχαρώδης διαβήτης, παθήσεις νεφρών και μεταβολικό σύνδρομο.',
      'Η υποστήριξη μπορεί επίσης να αφορά ειδικές περιόδους και ανάγκες, όπως εγκυμοσύνη και θηλασμός.',
      'Σε περιπτώσεις διατροφικών διαταραχών, η διατροφική υποστήριξη προσαρμόζεται στην περίπτωση και, όπου χρειάζεται, εντάσσεται σε συνεργασία με την υπόλοιπη θεραπευτική ομάδα.'
    ]
  },

  education: {
    title: 'Αξιολόγηση & Διατροφική Εκπαίδευση',
    paragraphs: [
      'Η καθοδήγηση δεν χρειάζεται να έχει το ίδιο επίπεδο λεπτομέρειας για όλους. Μπορεί να περιλαμβάνει πλήρες πρόγραμμα με συγκεκριμένες ποσότητες και μακροθρεπτικά συστατικά ή πιο γενικές, πρακτικές κατευθύνσεις.',
      'Στόχος είναι να κατανοείτε καλύτερα τις επιλογές σας και να μπορείτε να οργανώνετε τη διατροφή σας με μεγαλύτερη αυτονομία.',
      'Παρέχεται επίσης διατροφική εκπαίδευση και ενημέρωση σε συλλόγους ή ομάδες, ανάλογα με τις ανάγκες τους.'
    ]
  }

};


document
  .querySelectorAll('.specialty-trigger')
  .forEach(card => {

    card.addEventListener('click', () => {

      const specialty =
        specialtyContent[card.dataset.specialty];

      dialogTitle.textContent =
        specialty.title;

      dialogContent.innerHTML =
        specialty.paragraphs
          .map(paragraph => `<p>${paragraph}</p>`)
          .join('');

      document.body.classList.add('dialog-open');

      specialtyDialog.showModal();

    });

  });


dialogClose.addEventListener(
  'click',
  () => specialtyDialog.close()
);

specialtyDialog.addEventListener(
  'close',
  () => {
    document.body.classList.remove('dialog-open');
  }
);


specialtyDialog.addEventListener(
  'click',
  event => {

    if (event.target === specialtyDialog) {
      specialtyDialog.close();
    }

  }
);

const aboutPhotoButton =
  document.querySelector('.about-photo-button');

const photoDialog =
  document.querySelector('#photo-dialog');

const photoDialogClose =
  document.querySelector('.photo-dialog-close');


aboutPhotoButton.addEventListener(
  'click',
  () => {

    document.body.classList.add('dialog-open');

    photoDialog.showModal();

  }
);


photoDialogClose.addEventListener(
  'click',
  () => {

    photoDialog.close();

  }
);


photoDialog.addEventListener(
  'click',
  event => {

    if (event.target === photoDialog) {

      photoDialog.close();

    }

  }
);


photoDialog.addEventListener(
  'close',
  () => {

    document.body.classList.remove('dialog-open');

  }
);
