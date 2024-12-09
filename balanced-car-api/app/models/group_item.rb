class GroupItem < ApplicationRecord
  belongs_to :group
  belongs_to :item, polymorphic: true
  belongs_to :user

  validates :item, presence: true
  validate :validate_item_ownership

  private

  def validate_item_ownership
    return if item.user_id == group.user_id

    errors.add(:item, 'must belong to the same user as the group.')
  end
end
