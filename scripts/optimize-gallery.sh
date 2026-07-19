#!/bin/bash
set -e

SRC="/c/Users/Mark/Downloads"
DEST="/c/Users/Mark/Documents/Hunter Systems/medwick/website/public/gallery"
MAGICK="/c/Program Files/ImageMagick-7.1.2-Q16-HDRI/magick"

convert_one() {
  local src="$1"
  local dest="$2"
  "$MAGICK" "$SRC/$src" -auto-orient -strip -resize "1600x1600>" -quality 72 -define webp:method=6 "$dest"
}

# Roofing
convert_one "727757557_122124934917234650_8198351300053633976_n.jpg" "$DEST/roofing/medwick-metal-roof-install-chimney-work.webp"
convert_one "641640977_122109852129234650_2400556746743609505_n.jpg" "$DEST/roofing/medwick-metal-roof-farmhouse-install.webp"
convert_one "651864164_122112602013234650_53410176287327680_n.jpg" "$DEST/roofing/medwick-shingle-ridge-repair-closeup.webp"
convert_one "665635267_122116167729234650_8148942945313163765_n.jpg" "$DEST/roofing/medwick-roof-tearoff-neighborhood-aerial.webp"
convert_one "668353480_122116546071234650_2956195543085697450_n.jpg" "$DEST/roofing/medwick-roof-tearoff-dumpster-debris.webp"
convert_one "687044842_122119503021234650_8893582774133904944_n.jpg" "$DEST/roofing/medwick-roof-crew-install-aerial.webp"
convert_one "687628092_122119877835234650_6844454938131781188_n.jpg" "$DEST/roofing/medwick-roof-decking-install-crew.webp"
convert_one "696133451_122120529465234650_462430493380513500_n.jpg" "$DEST/roofing/medwick-roof-aerial-large-home.webp"
convert_one "703924792_122121778719234650_8349249328469601156_n.jpg" "$DEST/roofing/medwick-roof-tearoff-brick-ranch.webp"
convert_one "705293679_122121778707234650_8272352208516601954_n.jpg" "$DEST/roofing/medwick-roof-decking-replacement-dusk.webp"
convert_one "703796080_122121778737234650_6432558910645463226_n.jpg" "$DEST/roofing/medwick-roof-shingle-install-crew.webp"
convert_one "702877369_122121778749234650_99716137432845509_n.jpg" "$DEST/roofing/medwick-roof-crew-trailer-pool-yard.webp"

# Exteriors
convert_one "727347474_122124934887234650_8627814337724734059_n.jpg" "$DEST/exteriors/medwick-siding-gray-home-snow.webp"
convert_one "743995801_122127377985234650_1975816203366039737_n.jpg" "$DEST/exteriors/medwick-siding-brick-colonial-dumpster.webp"
convert_one "743967290_122127377973234650_6562822705584791059_n.jpg" "$DEST/exteriors/medwick-siding-back-deck-chimneys.webp"
convert_one "703935409_122121868863234650_1380532322948729477_n.jpg" "$DEST/exteriors/medwick-mobile-home-teal-metal-roof.webp"
convert_one "706919021_122121868851234650_2267934577924334206_n.jpg" "$DEST/exteriors/medwick-mobile-home-green-metal-roof-red-door.webp"
convert_one "706881200_122121997941234650_3020554123520119107_n.jpg" "$DEST/exteriors/medwick-garage-addition-boardbatten.webp"
convert_one "706818929_122121997929234650_2594377631487888233_n.jpg" "$DEST/exteriors/medwick-garage-addition-wooded-lot.webp"

# Remodels
convert_one "747807799_122127798993234650_2853172768268829229_n.jpg" "$DEST/remodels/medwick-staircase-framing-new-construction.webp"
convert_one "628931730_122106802695234650_6811074108884725590_n.jpg" "$DEST/remodels/medwick-bathroom-roll-in-shower-ada.webp"
convert_one "638166043_122108426775234650_7315556563747737049_n.jpg" "$DEST/remodels/medwick-bedroom-remodel-before-after.webp"
convert_one "645510218_122110927365234650_1330944201629137176_n.jpg" "$DEST/remodels/medwick-kitchen-remodel-cabinet-install.webp"
convert_one "687043611_122119877847234650_5298561715310800410_n.jpg" "$DEST/remodels/medwick-bathroom-tub-shower-before.webp"
convert_one "696664182_122120643465234650_7904364729139649972_n.jpg" "$DEST/remodels/medwick-bathroom-shower-before-after.webp"
convert_one "709135472_122122470327234650_1591244352100825272_n.jpg" "$DEST/remodels/medwick-shed-interior-loft-framing.webp"

# Team
convert_one "705031750_122121791415234650_7023261874558611690_n.jpg" "$DEST/team/medwick-crew-van-branding.webp"
convert_one "714766333_122123974413234650_7893675586308010216_n.jpg" "$DEST/team/medwick-team-photo-three-vans.webp"

echo "Done."
